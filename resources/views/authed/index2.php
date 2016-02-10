<div layout="row" flex>
    <md-sidenav layout="column" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
        <md-toolbar class="md-tall">
            <span flex></span>
            <div layout="column" class="md-toolbar-tools-bottom inset">
                <user-avatar></user-avatar>
                <span></span>
                <div>{{ authed.data.user.getFirstName() }} {{ authed.data.user.getLastName() }}</div>
                <div>{{ authed.data.user.getEmail() }}</div>
            </div>
        </md-toolbar>
        <md-list>
            <md-list-item>
                <a href="#/" ng-click="main.toggleSidenav('left')" md-ink-ripple layout="row" layout-align="start center" flex>
                        <div class="inset">
                            <i class="material-icons">dashboard</i>
                        </div>
                        <div class="inset">Dashboard</div>
                </a>
            </md-list-item>
            <md-list-item>
                <a href="#/skills" ng-click="main.toggleSidenav('left')" md-ink-ripple layout="row" layout-align="start center" flex>
                    <div class="inset">
                        <i class="material-icons">school</i>
                    </div>
                    <div class="inset">My Skills</div>
                </a>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Account</md-subheader>
            <md-list-item>
                <a href="#/settings" ng-click="main.toggleSidenav('left')" md-ink-ripple layout="row" layout-align="start center" flex>
                    <div class="inset">
                        <i class="material-icons">settings</i>
                    </div>
                    <div class="inset">Settings</div>
                </a>
            </md-list-item>
            <md-list-item>
                <a ng-click="authed.logout()" md-ink-ripple layout="row" layout-align="start center" flex>
                    <div class="inset">
                        <i class="material-icons">power_settings_new</i>
                    </div>
                    <div class="inset">Logoff</div>
                </a>
            </md-list-item>
        </md-list>
    </md-sidenav>
    <div layout="column" flex>
        <md-toolbar>
            <div class="md-toolbar-tools">
                <md-button class="md-icon-button" ng-click="main.toggleSidenav('left')" hide-gt-md>
                    <i class="material-icons">menu</i>
                </md-button>
                <h3>
                    {{ authed.data.toolbarTitle }}
                </h3>
                <span flex></span>
            </div>
        </md-toolbar>
        <md-content md-scroll-y flex>
            <div ng-view class="view-frame"></div>
        </md-content>
    </div>
</div>