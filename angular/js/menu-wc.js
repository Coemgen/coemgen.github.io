'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-sites documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' : 'data-target="#xs-components-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' :
                                            'id="xs-components-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                            <li class="link">
                                                <a href="components/ActivityTypeDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActivityTypeDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmsTaskFieldMapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmsTaskFieldMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppChangeComparisonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppChangeComparisonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApplInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicationFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApplicationFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BackgroundJobsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackgroundJobsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientServiceReportCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientServiceReportCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CriticalChangeCompareComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CriticalChangeCompareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CriticalParamsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CriticalParamsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DisplayDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocumentationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmrWcsEstComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmrWcsEstComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventschedulerAlertsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventschedulerAlertsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GatherDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GatherDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenericPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenericPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HwEvalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HwEvalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaasPodProcessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaasPodProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MachineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MachineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatErrorsAllSitesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatErrorsAllSitesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatErrorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatErrorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatErrorsSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatErrorsSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatParametersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MatParametersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MisAlertsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MisAlertsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyPageProcessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyPageProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NprErrorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NprErrorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PathwayAsmtComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PathwayAsmtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerflogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerflogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PirStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PirStatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PircpuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PircpuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PivotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PivotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreferenceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreferenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreferencesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreferencesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductivityDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductivityDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProtoDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProtoDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProtypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProtypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScorecardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScorecardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerConfigComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerCpuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerCpuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerDriveComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerDriveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServerServicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServerServicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiftComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiftComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiftProcessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiftProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiftViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiftViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtDashboardDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtDashboardDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtInputDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtInputDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtMyDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtMyDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SirtWidgetDictComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SirtWidgetDictComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SitesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscribeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscribeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveillanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveillanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SystemNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SystemNotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskCountsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskCountsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskCountsWeeklyModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskCountsWeeklyModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskCountsWeeklyOCBComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskCountsWeeklyOCBComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskWebStatusboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskWebStatusboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasklistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasklistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TempoStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TempoStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeTrackingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeTrackingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeTrackingReportingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeTrackingReportingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeTrackingReviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeTrackingReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateTaskActivityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateTaskActivityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateTimelogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateTimelogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserAccessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserAccessTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccessTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDebugComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDebugComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UwisessionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UwisessionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VirtualVisitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VirtualVisitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkloadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkloadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkloadPublicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkloadPublicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkloadSaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkloadSaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkloadTasksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkloadTasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkloadTmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkloadTmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearlyTaskCountsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YearlyTaskCountsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' : 'data-target="#xs-injectables-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' :
                                        'id="xs-injectables-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                        <li class="link">
                                            <a href="injectables/Globals.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Globals</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MaasService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MaasService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' : 'data-target="#xs-pipes-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' :
                                            'id="xs-pipes-links-module-AppModule-f6c771e888dfb06d730f7b0300afa29d"' }>
                                            <li class="link">
                                                <a href="pipes/WidgetkeyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetkeyPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmEventsModule.html" data-type="entity-link">EmEventsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmEventsModule-c5fa36ae0a359dad2f84cb3df015c7f0"' : 'data-target="#xs-components-links-module-EmEventsModule-c5fa36ae0a359dad2f84cb3df015c7f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmEventsModule-c5fa36ae0a359dad2f84cb3df015c7f0"' :
                                            'id="xs-components-links-module-EmEventsModule-c5fa36ae0a359dad2f84cb3df015c7f0"' }>
                                            <li class="link">
                                                <a href="components/EmEventComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventJobsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventJobsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventStepFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventStepFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventStepsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventStepsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventsErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventsErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmEventsFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmEventsFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmEventsRoutingModule.html" data-type="entity-link">EmEventsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Employee.html" data-type="entity-link">Employee</a>
                            </li>
                            <li class="link">
                                <a href="classes/FloatComparator.html" data-type="entity-link">FloatComparator</a>
                            </li>
                            <li class="link">
                                <a href="classes/FloatComparator-1.html" data-type="entity-link">FloatComparator</a>
                            </li>
                            <li class="link">
                                <a href="classes/HierarchyInfo.html" data-type="entity-link">HierarchyInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/TotalFilter.html" data-type="entity-link">TotalFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TotalFilter-1.html" data-type="entity-link">TotalFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TotalFilter-2.html" data-type="entity-link">TotalFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TotalFilter-3.html" data-type="entity-link">TotalFilter</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmEventsService.html" data-type="entity-link">EmEventsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Globals.html" data-type="entity-link">Globals</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaasService.html" data-type="entity-link">MaasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SirtService.html" data-type="entity-link">SirtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskViewService.html" data-type="entity-link">TaskViewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AlphaGuard.html" data-type="entity-link">AlphaGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BetaGuard.html" data-type="entity-link">BetaGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/FeatureGuard.html" data-type="entity-link">FeatureGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MaasGuard.html" data-type="entity-link">MaasGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/authData.html" data-type="entity-link">authData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisplayBlob.html" data-type="entity-link">DisplayBlob</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmError.html" data-type="entity-link">EmError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmEvent.html" data-type="entity-link">EmEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Job.html" data-type="entity-link">Job</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Site.html" data-type="entity-link">Site</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Status.html" data-type="entity-link">Status</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Step.html" data-type="entity-link">Step</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});