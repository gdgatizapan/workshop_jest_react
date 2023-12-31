import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Main, Counter, Form } from "@src/views";
import { PATH } from "@src/types";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Main />} />
      <Route path={PATH.counter} element={<Counter />} />
      <Route path={PATH.form} element={<Form />} />
    </>
  )
);
