<div layout="row" flex>
    <md-sidenav layout="column" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
        <md-toolbar class="md-tall md-hue-2">
            <span flex></span>
            <div layout="column" class="md-toolbar-tools-bottom inset">
                <user-avatar></user-avatar>
                <span></span>
                <div>Firstname Lastname</div>
                <div>email@domainname.com</div>
            </div>
        </md-toolbar>
        <md-list>
            <md-list-item>
                <a href="#/" md-ink-ripple layout="row" layout-align="start center" flex>
                        <div class="inset">
                            <i class="material-icons">dashboard</i>
                        </div>
                        <div class="inset">Dashboard</div>
                </a>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Account</md-subheader>
            <md-list-item>
                <a href="#/settings" md-ink-ripple layout="row" layout-align="start center" flex>
                    <div class="inset">
                        <i class="material-icons">settings</i>
                    </div>
                    <div class="inset">Settings</div>
                </a>
            </md-list-item>
        </md-list>
    </md-sidenav>
    <div layout="column" layout-fill>
        <md-toolbar>
            <div class="md-toolbar-tools">
                <md-button class="md-icon-button" ng-click="main.toggleSidenav('left')" hide-gt-md>
                    <i class="material-icons">menu</i>
                </md-button>
                <h3>
                    {{ main.data.toolbarTitle }}
                </h3>
                <span flex></span>
            </div>
        </md-toolbar>
        <md-content flex md-scroll-y>
            <div ng-view></div>
        </md-content>
    </div>
</div>