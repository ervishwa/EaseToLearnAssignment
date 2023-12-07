import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCOllectionForm from "./components/DetailCOllectionForm";
import { Layout } from "./components/Layout";
import { DocumentCollectionForm } from "./components/DocumentCollectionForm";
import { StateMentOfPurposeForm } from "./components/StateMentOfPurposeForm";
import { InterviewScheduleForm } from "./components/InterviewScheduleForm";
import { Temp } from "./components/Temp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DetailCOllectionForm />} />
          <Route path="documents" element={<DocumentCollectionForm />} />
          <Route path="statement" element={<StateMentOfPurposeForm />} />
          <Route path="interview" element={<InterviewScheduleForm />} />
          <Route path="building" element={<Temp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
