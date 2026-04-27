import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// ─── Lazy-load ALL pages — only downloaded when first visited ───────────────
// This eliminates the massive upfront bundle parse time and makes navigation instant.
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
const PricingPlans              = lazy(() => import('./PricingPlans'));
const BillingInvoices           = lazy(() => import('./BillingInvoices'));
const WorkspaceMembers          = lazy(() => import('./WorkspaceMembers'));
const ArchivedItems             = lazy(() => import('./ArchivedItems'));
const AutomationButler          = lazy(() => import('./AutomationButler'));
const PowerUpsDirectory         = lazy(() => import('./PowerUpsDirectory'));
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
const AiCommandCenter           = lazy(() => import('./AiCommandCenter'));
const EnterpriseAdminDashboard  = lazy(() => import('./EnterpriseAdminDashboard'));
const AdvancedCardDetail        = lazy(() => import('./AdvancedCardDetail'));
const SmartLinksManager         = lazy(() => import('./SmartLinksManager'));
const TeamWorkloadView          = lazy(() => import('./TeamWorkloadView'));
const ViewsGallery              = lazy(() => import('./ViewsGallery'));
const PowerUpDetails            = lazy(() => import('./PowerUpDetails'));
const SentimentAnalysis         = lazy(() => import('./SentimentAnalysis'));
const StrategicRoadmap          = lazy(() => import('./StrategicRoadmap'));
const EnterpriseSecurity        = lazy(() => import('./EnterpriseSecurity'));

// ─── Minimal full-screen spinner shown during lazy chunk loading ──────────────
const PageSpinner = () => (
  <div
    style={{
      position: 'fixed', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#fff', zIndex: 9999,
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <svg
        style={{ width: 40, height: 40, animation: 'spin 0.75s linear infinite', color: '#0052CC' }}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      >
        <circle style={{ opacity: 0.2 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <path style={{ opacity: 0.9 }} fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      <p style={{ marginTop: 12, fontSize: 13, color: '#5E6C84', fontFamily: 'Inter, sans-serif' }}>
        Loading...
      </p>
    </div>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const MainLayout = lazy(() => import('../../components/MainLayout'));

// ─── Protected Route ──────────────────────────────────────────────────────────
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // Show spinner while auth state is being resolved (localStorage check)
  if (loading) return <PageSpinner />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

// ─── Routes ───────────────────────────────────────────────────────────────────
export const GeneratedRoutes = () => (
  <Suspense fallback={<PageSpinner />}>
    <Routes>
      <Route path="/"                         element={<LandingPage />} />
      <Route path="/landing-page"             element={<LandingPage />} />
      <Route path="/login"                    element={<Login />} />
      <Route path="/sign-up"                  element={<SignUp />} />
      <Route path="/invite/:token"            element={<InvitationResponse />} />

      {/* Protected Layout Routes */}
      <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/boards-dashboard"         element={<BoardsDashboard />} />
        <Route path="/board-view/:id"           element={<BoardView />} />
        <Route path="/card-detail-view/:id"     element={<CardDetailView />} />
        <Route path="/workspace-settings/:id?"  element={<WorkspaceSettings />} />
        <Route path="/notifications"            element={<Notifications />} />
        <Route path="/search-results"           element={<SearchResults />} />
        <Route path="/member-profile"           element={<MemberProfile />} />
        <Route path="/template-library"         element={<TemplateLibrary />} />
        <Route path="/create-board"             element={<CreateBoard />} />
        <Route path="/activity-log"             element={<ActivityLog />} />
        <Route path="/pricing-plans"            element={<PricingPlans />} />
        <Route path="/billing-invoices"         element={<BillingInvoices />} />
        <Route path="/workspace-members/:id"    element={<WorkspaceMembers />} />
        <Route path="/archived-items"           element={<ArchivedItems />} />
        <Route path="/automation-butler"        element={<AutomationButler />} />
        <Route path="/power-ups-directory"      element={<PowerUpsDirectory />} />
        <Route path="/help-center"              element={<HelpCenter />} />
        <Route path="/workspace-table-view"     element={<WorkspaceTableView />} />
        <Route path="/workspace-dashboard-stats" element={<WorkspaceDashboardStats />} />
        <Route path="/board-calendar-view"      element={<BoardCalendarView />} />
        <Route path="/board-timeline-view"      element={<BoardTimelineView />} />
        <Route path="/board-map-view"           element={<BoardMapView />} />
        <Route path="/workspace-switcher"       element={<WorkspaceSwitcher />} />
        <Route path="/invite-to-workspace"      element={<InviteToWorkspace />} />
        <Route path="/export-board-data"        element={<ExportBoardData />} />
        <Route path="/keyboard-shortcuts"       element={<KeyboardShortcuts />} />
        <Route path="/ai-command-center"        element={<AiCommandCenter />} />
        <Route path="/enterprise-admin-dashboard" element={<EnterpriseAdminDashboard />} />
        <Route path="/advanced-card-detail"     element={<AdvancedCardDetail />} />
        <Route path="/smart-links-manager"      element={<SmartLinksManager />} />
        <Route path="/team-workload-view"       element={<TeamWorkloadView />} />
        <Route path="/views-gallery"            element={<ViewsGallery />} />
        <Route path="/power-up-details"         element={<PowerUpDetails />} />
        <Route path="/sentiment-analysis"       element={<SentimentAnalysis />} />
        <Route path="/strategic-roadmap"        element={<StrategicRoadmap />} />
        <Route path="/enterprise-security"      element={<EnterpriseSecurity />} />
      </Route>

      <Route path="/onboarding-welcome"       element={<ProtectedRoute><OnboardingWelcome /></ProtectedRoute>} />
      <Route path="*"                         element={<PageNotFound404 />} />
    </Routes>
  </Suspense>
);
