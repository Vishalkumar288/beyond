import type { ErrorInfo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrong from "./shared/UiElements/SomethingWentWrong";
import Header from "./shared/layouts/Header";
import { Routes } from "react-router-dom";
import { publicRoutes } from "./shared/navigation/routes";

function App() {
  const logError = (error: Error, info: ErrorInfo) => {
    console.error("Error:", error);
    console.error("Component Stack:", info.componentStack);
  };

  return (
    <ErrorBoundary
      FallbackComponent={SomethingWentWrong}
      onReset={(details) => console.log(details)}
      onError={logError}
    >
      <main className="flex min-h-svh flex-col ">
        <Header />
        <Routes>{publicRoutes}</Routes>
      </main>
    </ErrorBoundary>
  );
}

export default App;
