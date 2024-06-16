import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import Layouts from "./components/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LoaderView from "./components/LoaderView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<LoaderView />}>
          <Routes>
            <Route element={<Layouts />}>
              <Route path="/" element={<Website />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
