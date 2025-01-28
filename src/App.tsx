import { useSyncDemo } from "@tldraw/sync";
import "./App.css";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

function App() {
  // NOTE: This is only for demo purposes. for production, we need to host our own server
  // see https://tldraw.dev/docs/collaboration#:~:text=same%20room%27s%20project.-,Using%20tldraw%20sync%20in%20production,-To%20use%20tldraw
  const store = useSyncDemo({ roomId: "p8-tldraw-poc" });

  return (
    <>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw store={store} />
      </div>
    </>
  );
}

export default App;
