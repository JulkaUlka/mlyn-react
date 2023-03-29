import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './Header/Header';

const LazyHome = lazy(() => import('../pages/Home/Home'));
const LazyWorkDetails = lazy(() => import('../pages/WorkDetails/WorkDetails'));
const LazyAbout = lazy(() => import('../pages/About/About'));
const LazyWorks = lazy(() => import('../pages/Works/Works'));
const LazyContacts = lazy(() => import('../pages/Contacts/Contacts'));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/works" element={<LazyWorks />} />
            <Route path="/:workId/*" element={<LazyWorkDetails />} />
            <Route path="/contacts" element={<LazyContacts />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
