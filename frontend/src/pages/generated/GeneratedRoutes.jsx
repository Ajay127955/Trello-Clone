import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Lazy-load ALL pages ───────────────
const LandingPage               = lazy(() => import('./LandingPage'));
const BoardsDashboard           = lazy(() => import('./BoardsDashboard'));
const BoardView                 = lazy(() => import('./BoardView'));
const CardDetailView            = lazy(() => import('./CardDetailView'));
const WorkspaceSettings         = lazy(() => import('./WorkspaceSettings'));
const Notifications             = lazy(() => import('./Notifications'));
const SearchResults             = lazy(() => import('./SearchResults'));
const MemberProfile             = lazy(() => import('./MemberProfile'));
const TemplateLibrary           = lazy(() => import('./TemplateLibrary'));
const Login                     = lazy(() => import('./Login'));
const SignUp                    = lazy(() => import('./SignUp'));
const CreateBoard               = lazy(() => import('./CreateBoard'));
const ActivityLog               = lazy(() => import('./ActivityLog'));
const WorkspaceMembers          = lazy(() => import('./WorkspaceMembers'));
const ArchivedItems             = lazy(() => import('./ArchivedItems'));
const HelpCenter                = lazy(() => import('./HelpCenter'));
const WorkspaceTableView        = lazy(() => import('./WorkspaceTableView'));
const WorkspaceDashboardStats   = lazy(() => import('./WorkspaceDashboardStats'));
const BoardCalendarView         = lazy(() => import('./BoardCalendarView'));
const BoardTimelineView         = lazy(() => import('./BoardTimelineView'));
const BoardMapView              = lazy(() => import('./BoardMapView'));
const OnboardingWelcome         = lazy(() => import('./OnboardingWelcome'));
const WorkspaceSwitcher         = lazy(() => import('./WorkspaceSwitcher'));
const InviteToWorkspace         = lazy(() => import('./InviteToWorkspace'));
const ExportBoardData           = lazy(() => import('./ExportBoardData'));
const InvitationResponse      = lazy(() => import('./InvitationResponse'));
const PageNotFound404           = lazy(() => import('./PageNotFound404'));
const KeyboardShortcuts         = lazy(() => import('./KeyboardShortcuts'));
const AdvancedCardDetail        = lazy(() => import('./AdvancedCardDetail'));
const SmartLinksManager         = lazy(() => import('./SmartLinksManager'));
const ViewsGallery              = lazy(() => import('./ViewsGallery'));

// ─── Subtle top-level loader ──────────────
const PageSpinner = () => (
  <div className="fixed top-0 left-0 w-full h-1 z-[10000]">
    <motion.div 
      initial={{ width: "0%", opacity: 1 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-full bg-blue-600 shadow-[0_0_10px_#2563eb]"
    />
  </div>
);

// ─── Page Transition Wrapper ──────────────
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.99 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, scale: 1.01 }}
    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    className="h-full w-full"
  >
    {children}
  </motion.div>
);

const MainLayout = lazy(() => import('../../components/MainLayout'));

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export const GeneratedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageSpinner />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"                         element={<PageTransition><LandingPage /></PageTransition>} />
          <Route path="/landing-page"             element={<PageTransition><LandingPage /></PageTransition>} />
          <Route path="/login"                    element={<PageTransition><Login /></PageTransition>} />
          <Route path="/sign-up"                  element={<PageTransition><SignUp /></PageTransition>} />
          <Route path="/invite/:token"            element={<PageTransition><InvitationResponse /></PageTransition>} />

          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route path="/boards-dashboard"         element={<PageTransition><BoardsDashboard /></PageTransition>} />
            <Route path="/board-view/:id"           element={<PageTransition><BoardView /></PageTransition>} />
            <Route path="/card-detail-view/:id"     element={<PageTransition><CardDetailView /></PageTransition>} />
            <Route path="/workspace-settings/:id?"  element={<PageTransition><WorkspaceSettings /></PageTransition>} />
            <Route path="/notifications"            element={<PageTransition><Notifications /></PageTransition>} />
            <Route path="/search-results"           element={<PageTransition><SearchResults /></PageTransition>} />
            <Route path="/member-profile"           element={<PageTransition><MemberProfile /></PageTransition>} />
            <Route path="/template-library"         element={<PageTransition><TemplateLibrary /></PageTransition>} />
            <Route path="/create-board"             element={<PageTransition><CreateBoard /></PageTransition>} />
            <Route path="/activity-log"             element={<PageTransition><ActivityLog /></PageTransition>} />
            <Route path="/workspace-members/:id?"   element={<PageTransition><WorkspaceMembers /></PageTransition>} />
            <Route path="/archived-items"           element={<PageTransition><ArchivedItems /></PageTransition>} />
            <Route path="/help-center"              element={<PageTransition><HelpCenter /></PageTransition>} />
            <Route path="/workspace-table-view"     element={<PageTransition><WorkspaceTableView /></PageTransition>} />
            <Route path="/workspace-dashboard-stats" element={<PageTransition><WorkspaceDashboardStats /></PageTransition>} />
            <Route path="/board-calendar-view"      element={<PageTransition><BoardCalendarView /></PageTransition>} />
            <Route path="/board-timeline-view"      element={<PageTransition><BoardTimelineView /></PageTransition>} />
            <Route path="/board-map-view"           element={<PageTransition><BoardMapView /></PageTransition>} />
            <Route path="/workspace-switcher"       element={<PageTransition><WorkspaceSwitcher /></PageTransition>} />
            <Route path="/invite-to-workspace"      element={<PageTransition><InviteToWorkspace /></PageTransition>} />
            <Route path="/export-board-data"        element={<PageTransition><ExportBoardData /></PageTransition>} />
            <Route path="/keyboard-shortcuts"       element={<PageTransition><KeyboardShortcuts /></PageTransition>} />
            <Route path="/advanced-card-detail"     element={<PageTransition><AdvancedCardDetail /></PageTransition>} />
            <Route path="/smart-links-manager"      element={<PageTransition><SmartLinksManager /></PageTransition>} />
            <Route path="/views-gallery"            element={<PageTransition><ViewsGallery /></PageTransition>} />
          </Route>

          <Route path="/onboarding-welcome"       element={<ProtectedRoute><PageTransition><OnboardingWelcome /></PageTransition></ProtectedRoute>} />
          <Route path="*"                         element={<PageTransition><PageNotFound404 /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

