<div ng-controller="IndexController as index">
    <div class="mainSection" layout="column" layout-align="center center">
        <h1 id="appName">{{ main.appName }}</h1>
        <h2 id="tagLine" align="center">Improve your skills and get work done.</h2>
        <div layout="row">
            <md-button id="register" class="md-raised md-primary" ng-click="index.showRegisterDialog()">Register</md-button>
            <md-button id="login" class="md-raised md-primary" ng-click="index.showLoginDialog()">Log in</md-button>
        </div>
    </div>

    <div class="section" layout="row" layout-align="center center">
        <h1>Expand your portfolio, gain valuable work experience, and get work done in return.</h1>
    </div>

    <div layout="row" layout-align="center center">
        <md-card flex-gt-sm="70" flex="100">
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline"><span class="focused">Improve your skills</span> in your free time.</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <ol>
                    <li>
                        After registering, <span class="focused">add your own skills to your profile.</span>  This can
                        be anything from creating a basic website, to doing AutoCAD drawings, to proofreading an article.
                    </li>
                    <br>
                    <li>
                        <span class="focused">Choose how often you are available.</span>  You decide how often you want to
                        put your skills to work.  Do you have free time once a week, twice a week, or once a month?
                    </li>
                    <br>
                    <li>
                        You will <span class="focused">automatically get job offers</span> according to your chosen
                        skills and free time.
                    </li>
                </ol>
            </md-card-content>
        </md-card>
    </div>

    <div layout="row" layout-align="center center">
        <md-card flex-gt-sm="70" flex="100">
            <md-card-title>
                <md-card-title-text>
                    <span class="md-headline"><span class="focused">Get work done</span> and don't pay a dime.</span>
                </md-card-title-text>
            </md-card-title>
            <md-card-content>
                <ol>
                    <li>
                        For each job completed, you will <span class="focused">receive a predetermined number of credits.</span>
                    </li>
                    <br>
                    <li>
                        These credits can be used to <span class="focused">request your own jobs and receive quality work.</span>
                        You decide who works on your job and how many credits you are willing to spend.
                    </li>
                    <br>
                    <li>
                        Leave feedback on jobs and <span class="focused">expand your portfolio of work.</span>
                    </li>
                </ol>
            </md-card-content>
        </md-card>
    </div>
</div>