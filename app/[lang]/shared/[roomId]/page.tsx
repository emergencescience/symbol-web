import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; roomId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, roomId } = await params;
  return {
    title: `Histrategy Game Room ${roomId}`,
    description: `View a shared Histrategy game room`,
    robots: "noindex",
  };
}

export default async function SharedRoomPage({ params }: Props) {
  const { lang, roomId } = await params;

  const apiBase = process.env.NEXT_PUBLIC_API_BASE || "";
  const url = `${apiBase}/games/histrategy/shared/${roomId}`;

  let data: any = null;
  let error: string | null = null;

  try {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) {
      error = `Room not found (status ${res.status})`;
    } else {
      data = await res.json();
    }
  } catch (e: any) {
    error = `Failed to load room: ${e.message}`;
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", fontFamily: "serif" }}>
        <h1>Histrategy - Shared Room</h1>
        <p style={{ color: "red" }}>{error}</p>
        <p>Room ID: {roomId}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Histrategy — {data?.player_name || data?.faction || "Shared Room"}</h1>
      <p>
        Year {data?.year} · {data?.season} · Turn {data?.turn_number || 0}
      </p>

      {data?.player_decision && (
        <section>
          <h2>Strategy</h2>
          <p>{data.player_decision}</p>
        </section>
      )}

      {data?.narrative && (
        <section>
          <h2>Historical Record</h2>
          <div style={{ whiteSpace: "pre-wrap" }}>{data.narrative}</div>
        </section>
      )}

      {data?.state_changes && (
        <section>
          <h2>State Changes</h2>
          <pre>{JSON.stringify(data.state_changes, null, 2)}</pre>
        </section>
      )}
    </div>
  );
}
