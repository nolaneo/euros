'use strict';



;define("euros/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("euros/app", ["exports", "ember-resolver", "ember-load-initializers", "euros/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("euros/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("euros/components/euros", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col space-y-2 pt-4">
    <div class="text-center text-xl lg:text-2xl font-thin text-gray-300">
      STANDINGS
    </div>
    <Euros::Standings @standings={{@standings}} />
  
    <Euros::FixtureList @fixtures={{@fixtures}} />
  </div>
  
  */
  {
    "id": "BITwgBIe",
    "block": "[[[10,0],[14,0,\"flex flex-col space-y-2 pt-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"text-center text-xl lg:text-2xl font-thin text-gray-300\"],[12],[1,\"\\n    STANDINGS\\n  \"],[13],[1,\"\\n  \"],[8,[39,0],null,[[\"@standings\"],[[30,1]]],null],[1,\"\\n\\n  \"],[8,[39,1],null,[[\"@fixtures\"],[[30,2]]],null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@standings\",\"@fixtures\"],false,[\"euros/standings\",\"euros/fixture-list\"]]",
    "moduleName": "euros/components/euros.hbs",
    "isStrictMode": false
  });

  class Euros extends _component.default {}

  _exports.default = Euros;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Euros);
});
;define("euros/components/euros/fixture-list", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col space-y-2">
  
    {{#if this.liveFixtures.length}}
      <div class="flex flex-col">
        <div class="text-center text-xl lg:text-2xl font-thin text-gray-300">
          LIVE
        </div>
  
        <div class="flex flex-col items-center space-y-4 p-4">
          {{#each this.liveFixtures as |fixture|}}
            <Euros::FixtureList::Fixture @fixture={{fixture}} />
          {{/each}}
          <div class="flex flex-col h-1 border-b border-gray-600 w-1/3 lg:max-w-2xl"></div>
        </div>
      </div>
    {{/if}}
  
    {{#if this.completedFixtures.length}}
      <div class="flex flex-col">
        <div class="flex flex-row lg:max-w-2xl self-center w-full">
          <div class="flex flex-col w-1/4 ml-4 lg:ml-0"></div>
          <div class="flex flex-col flex-1 text-center text-xl lg:text-2xl font-thin text-gray-300">
            {{#if this.onlyShowRecentlyCompleted}}RECENT RESULTS{{else}}ALL RESULTS{{/if}}
          </div>
          <div
            role="button"
            class="flex flex-col rounded w-1/4 border border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 hover:cursor-pointer transition-colors mr-4 lg:mr-0"
            {{on "click" this.toggleRecentResultsList}}
          >
            <span class="self-center leading-8 whitespace-nowrap text-xs">
              {{#if this.onlyShowRecentlyCompleted}}SEE ALL RESULTS{{else}}HIDE RESULTS{{/if}}
            </span>
          </div>
        </div>
   
  
        <div class="flex flex-col items-center space-y-4 p-4">
          {{#each this.completedFixtures as |fixture|}}
            <Euros::FixtureList::Fixture @fixture={{fixture}} />
          {{/each}}
          <div class="flex flex-col h-1 border-b border-gray-600 w-1/3 lg:max-w-2xl"></div>
        </div>
      </div>
    {{/if}}
  
  
  
    <div class="flex flex-col">
      <div class="text-center text-xl lg:text-2xl font-thin text-gray-300">
        UPCOMING FIXTURES
      </div>
  
      <div class="flex flex-col items-center space-y-4 p-4">
        {{#each this.upcomingFixtures as |fixture|}}
          <Euros::FixtureList::Fixture @fixture={{fixture}} />
        {{/each}}
      </div>
    </div>
  </div>
  
  
  */
  {
    "id": "OorRrKTW",
    "block": "[[[10,0],[14,0,\"flex flex-col space-y-2\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"liveFixtures\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"flex flex-col\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"text-center text-xl lg:text-2xl font-thin text-gray-300\"],[12],[1,\"\\n        LIVE\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"flex flex-col items-center space-y-4 p-4\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"liveFixtures\"]]],null]],null],null,[[[1,\"          \"],[8,[39,3],null,[[\"@fixture\"],[[30,1]]],null],[1,\"\\n\"]],[1]],null],[1,\"        \"],[10,0],[14,0,\"flex flex-col h-1 border-b border-gray-600 w-1/3 lg:max-w-2xl\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"completedFixtures\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"flex flex-col\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-row lg:max-w-2xl self-center w-full\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col w-1/4 ml-4 lg:ml-0\"],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col flex-1 text-center text-xl lg:text-2xl font-thin text-gray-300\"],[12],[1,\"\\n          \"],[41,[30,0,[\"onlyShowRecentlyCompleted\"]],[[[1,\"RECENT RESULTS\"]],[]],[[[1,\"ALL RESULTS\"]],[]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[11,0],[24,\"role\",\"button\"],[24,0,\"flex flex-col rounded w-1/4 border border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 hover:cursor-pointer transition-colors mr-4 lg:mr-0\"],[4,[38,4],[\"click\",[30,0,[\"toggleRecentResultsList\"]]],null],[12],[1,\"\\n          \"],[10,1],[14,0,\"self-center leading-8 whitespace-nowrap text-xs\"],[12],[1,\"\\n            \"],[41,[30,0,[\"onlyShowRecentlyCompleted\"]],[[[1,\"SEE ALL RESULTS\"]],[]],[[[1,\"HIDE RESULTS\"]],[]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n \\n\\n      \"],[10,0],[14,0,\"flex flex-col items-center space-y-4 p-4\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"completedFixtures\"]]],null]],null],null,[[[1,\"          \"],[8,[39,3],null,[[\"@fixture\"],[[30,2]]],null],[1,\"\\n\"]],[2]],null],[1,\"        \"],[10,0],[14,0,\"flex flex-col h-1 border-b border-gray-600 w-1/3 lg:max-w-2xl\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\\n\\n  \"],[10,0],[14,0,\"flex flex-col\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"text-center text-xl lg:text-2xl font-thin text-gray-300\"],[12],[1,\"\\n      UPCOMING FIXTURES\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"flex flex-col items-center space-y-4 p-4\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"upcomingFixtures\"]]],null]],null],null,[[[1,\"        \"],[8,[39,3],null,[[\"@fixture\"],[[30,3]]],null],[1,\"\\n\"]],[3]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"fixture\",\"fixture\",\"fixture\"],false,[\"if\",\"each\",\"-track-array\",\"euros/fixture-list/fixture\",\"on\"]]",
    "moduleName": "euros/components/euros/fixture-list.hbs",
    "isStrictMode": false
  });

  let EurosFixtureList = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = class EurosFixtureList extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "api", _descriptor, this);

      _initializerDefineProperty(this, "onlyShowRecentlyCompleted", _descriptor2, this);
    }

    toggleRecentResultsList() {
      this.onlyShowRecentlyCompleted = !this.onlyShowRecentlyCompleted;
    }

    get completedFixtures() {
      return this.api.model.fixtures.filter(fixture => {
        return fixture.status === 'FINISHED' && (!this.onlyShowRecentlyCompleted || this.fixtureFromLast24Hours(new Date(fixture.kickOffTime.dateTime)));
      }).sort((a, b) => {
        return new Date(b.kickOffTime.dateTime).getTime() - new Date(a.kickOffTime.dateTime).getTime();
      });
    }

    fixtureFromLast24Hours(date) {
      let now = Date.now();
      let one_day_ago = now - 1000 * 60 * 60 * 24;
      return date.getTime() > one_day_ago;
    }

    get liveFixtures() {
      return this.api.model.fixtures.filter(fixture => fixture.status === 'LIVE').sort((a, b) => {
        return new Date(a.kickOffTime.dateTime).getTime() - new Date(b.kickOffTime.dateTime).getTime();
      });
    }

    get upcomingFixtures() {
      return this.api.model.fixtures.filter(fixture => fixture.status === 'UPCOMING').sort((a, b) => {
        return new Date(a.kickOffTime.dateTime).getTime() - new Date(b.kickOffTime.dateTime).getTime();
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "api", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "onlyShowRecentlyCompleted", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleRecentResultsList", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "toggleRecentResultsList"), _class.prototype)), _class));
  _exports.default = EurosFixtureList;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EurosFixtureList);
});
;define("euros/components/euros/fixture-list/fixture", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col flex-grow rounded-xl  w-full shadow lg:max-w-2xl p-4 space-y-4 {{if this.isLive 'bg-purple-900 bg-opacity-30' 'bg-charcoal'}}">
    <div class="flex flex-row items-center">
      <Euros::FixtureList::Fixture::TeamName @team={{@fixture.homeTeam}} class="text-left -ml-2" />
      <div class="flex flex-col flex-grow text-center text-gray-300">
        {{#if this.isLive}}
          <div class="flex flex-row space-x-2 items-center">
            <div class="h-3 w-3 rounded-full bg-red-800 animate-pulse"></div>
            <div>
              <span class="whitespace-nowrap">LIVE{{~#if @fixture.minute.normal}}: {{or @fixture.minute.normal '––'}} {{~#if @fixture.minute.injury}}+{{@fixture.minute.injury}}{{/if}}'{{/if}}</span>
            </div>
          </div>
          <div class="text-gray-500 text-center uppercase font-thin whitespace-nowrap">
            {{or @fixture.translations.phaseName.EN 'First half'}}
          </div>
        {{else if this.isUpcoming}}
          vs
        {{else}}
          <div class="text-gray-400 text-center uppercase font-thin whitespace-nowrap">
            {{moment-from-now @fixture.kickOffTime.dateTime}}
          </div>
        {{/if}}
      </div>
      <Euros::FixtureList::Fixture::TeamName @team={{@fixture.awayTeam}} class="text-right flex-row-reverse -mr-2" />
    </div>
    <div class="flex flex-row items-center">
      <Euros::FixtureList::Fixture::Avatars @countryCode={{@fixture.homeTeam.countryCode}} class="justify-start" />
      {{#if this.isUpcoming}}
        <div class="flex flex-col items-center w-1/3">
          <div class="text-gray-400 uppercase font-light text-lg text-center">
            {{moment-format @fixture.kickOffTime.dateTime 'ddd MMMM DD'}}<br>
            {{moment-format @fixture.kickOffTime.dateTime 'HH:mm'}}
          </div>
        </div>
      {{else}}
        <div class="flex flex-col items-center w-1/3 space-y-1">
          <div class="text-white uppercase font-light text-4xl text-center">
            {{or @fixture.score.total.home '0'}} – {{or @fixture.score.total.away '0'}}
          </div>
        </div>
      {{/if}}
      <Euros::FixtureList::Fixture::Avatars @countryCode={{@fixture.awayTeam.countryCode}} class="justify-end" />
    </div>
  </div>
  
  */
  {
    "id": "l61o3Q6N",
    "block": "[[[10,0],[15,0,[29,[\"flex flex-col flex-grow rounded-xl  w-full shadow lg:max-w-2xl p-4 space-y-4 \",[52,[30,0,[\"isLive\"]],\"bg-purple-900 bg-opacity-30\",\"bg-charcoal\"]]]],[12],[1,\"\\n  \"],[10,0],[14,0,\"flex flex-row items-center\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"text-left -ml-2\"]],[[\"@team\"],[[30,1,[\"homeTeam\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"flex flex-col flex-grow text-center text-gray-300\"],[12],[1,\"\\n\"],[41,[30,0,[\"isLive\"]],[[[1,\"        \"],[10,0],[14,0,\"flex flex-row space-x-2 items-center\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"h-3 w-3 rounded-full bg-red-800 animate-pulse\"],[12],[13],[1,\"\\n          \"],[10,0],[12],[1,\"\\n            \"],[10,1],[14,0,\"whitespace-nowrap\"],[12],[1,\"LIVE\"],[41,[30,1,[\"minute\",\"normal\"]],[[[1,\": \"],[1,[28,[35,2],[[30,1,[\"minute\",\"normal\"]],\"––\"],null]],[41,[30,1,[\"minute\",\"injury\"]],[[[1,\"+\"],[1,[30,1,[\"minute\",\"injury\"]]]],[]],null],[1,\"'\"]],[]],null],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"text-gray-500 text-center uppercase font-thin whitespace-nowrap\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,1,[\"translations\",\"phaseName\",\"EN\"]],\"First half\"],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isUpcoming\"]],[[[1,\"        vs\\n\"]],[]],[[[1,\"        \"],[10,0],[14,0,\"text-gray-400 text-center uppercase font-thin whitespace-nowrap\"],[12],[1,\"\\n          \"],[1,[28,[35,3],[[30,1,[\"kickOffTime\",\"dateTime\"]]],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]],[]]],[1,\"    \"],[13],[1,\"\\n    \"],[8,[39,1],[[24,0,\"text-right flex-row-reverse -mr-2\"]],[[\"@team\"],[[30,1,[\"awayTeam\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"flex flex-row items-center\"],[12],[1,\"\\n    \"],[8,[39,4],[[24,0,\"justify-start\"]],[[\"@countryCode\"],[[30,1,[\"homeTeam\",\"countryCode\"]]]],null],[1,\"\\n\"],[41,[30,0,[\"isUpcoming\"]],[[[1,\"      \"],[10,0],[14,0,\"flex flex-col items-center w-1/3\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-gray-400 uppercase font-light text-lg text-center\"],[12],[1,\"\\n          \"],[1,[28,[35,5],[[30,1,[\"kickOffTime\",\"dateTime\"]],\"ddd MMMM DD\"],null]],[10,\"br\"],[12],[13],[1,\"\\n          \"],[1,[28,[35,5],[[30,1,[\"kickOffTime\",\"dateTime\"]],\"HH:mm\"],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,0],[14,0,\"flex flex-col items-center w-1/3 space-y-1\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-white uppercase font-light text-4xl text-center\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,1,[\"score\",\"total\",\"home\"]],\"0\"],null]],[1,\" – \"],[1,[28,[35,2],[[30,1,[\"score\",\"total\",\"away\"]],\"0\"],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[8,[39,4],[[24,0,\"justify-end\"]],[[\"@countryCode\"],[[30,1,[\"awayTeam\",\"countryCode\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@fixture\"],false,[\"if\",\"euros/fixture-list/fixture/team-name\",\"or\",\"moment-from-now\",\"euros/fixture-list/fixture/avatars\",\"moment-format\"]]",
    "moduleName": "euros/components/euros/fixture-list/fixture.hbs",
    "isStrictMode": false
  });

  class EurosFixtureListFixtureComponent extends _component.default {
    get isLive() {
      return this.args.fixture.status === 'LIVE';
    }

    get isUpcoming() {
      return this.args.fixture.status === 'UPCOMING';
    }

    get isFinished() {
      return this.args.fixture.status === 'FINISHED';
    }

  }

  _exports.default = EurosFixtureListFixtureComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EurosFixtureListFixtureComponent);
});
;define("euros/components/euros/fixture-list/fixture/avatars", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex -space-x-1 w-3/6" ...attributes>
    {{#each this.players as |player|}}
      <img src="/euros/assets/{{player.image}}" class="inline-block h-8 w-8 rounded-full ring-2 ring-white" title={{player.name}}/>
    {{/each}}
  </div>
  
  */
  {
    "id": "Mex5loZy",
    "block": "[[[11,0],[24,0,\"flex -space-x-1 w-3/6\"],[17,1],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"players\"]]],null]],null],null,[[[1,\"    \"],[10,\"img\"],[15,\"src\",[29,[\"/euros/assets/\",[30,2,[\"image\"]]]]],[14,0,\"inline-block h-8 w-8 rounded-full ring-2 ring-white\"],[15,\"title\",[30,2,[\"name\"]]],[12],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\"]],[\"&attrs\",\"player\"],false,[\"each\",\"-track-array\"]]",
    "moduleName": "euros/components/euros/fixture-list/fixture/avatars.hbs",
    "isStrictMode": false
  });

  let EurosFixtureListFixtureAvatarsComponent = (_dec = Ember.inject.service, (_class = class EurosFixtureListFixtureAvatarsComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "sweepstakes", _descriptor, this);
    }

    get players() {
      return this.sweepstakes.countryMapping[this.args.countryCode];
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "sweepstakes", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = EurosFixtureListFixtureAvatarsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EurosFixtureListFixtureAvatarsComponent);
});
;define("euros/components/euros/fixture-list/fixture/team-name", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-row items-center w-3/6 text-gray-100 {{if (gt @team.internationalName.length 8) 'text-base' 'text-xl'}} lg:text-xl uppercase font-bold" ...attributes>
    {{#if @team.countryCode}}
      <img src="/euros/assets/svg/flags/{{@team.countryCode}}.svg" class="h-8 mx-2 rounded"/>
    {{/if}}
    <div>
      {{#if (eq @team.internationalName 'North Macedonia')}}
        N. Macedonia
      {{else}}
        {{@team.internationalName}}
      {{/if}}
    </div>
  </div>
  */
  {
    "id": "nVeJmpqX",
    "block": "[[[11,0],[16,0,[29,[\"flex flex-row items-center w-3/6 text-gray-100 \",[52,[28,[37,1],[[30,1,[\"internationalName\",\"length\"]],8],null],\"text-base\",\"text-xl\"],\" lg:text-xl uppercase font-bold\"]]],[17,2],[12],[1,\"\\n\"],[41,[30,1,[\"countryCode\"]],[[[1,\"    \"],[10,\"img\"],[15,\"src\",[29,[\"/euros/assets/svg/flags/\",[30,1,[\"countryCode\"]],\".svg\"]]],[14,0,\"h-8 mx-2 rounded\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,0],[12],[1,\"\\n\"],[41,[28,[37,2],[[30,1,[\"internationalName\"]],\"North Macedonia\"],null],[[[1,\"      N. Macedonia\\n\"]],[]],[[[1,\"      \"],[1,[30,1,[\"internationalName\"]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"],[13]],[\"@team\",\"&attrs\"],false,[\"if\",\"gt\",\"eq\"]]",
    "moduleName": "euros/components/euros/fixture-list/fixture/team-name.hbs",
    "isStrictMode": false
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("euros/components/euros/standings", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col items-center space-y-4 p-4">
    <div class="flex flex-col flex-grow rounded-xl bg-charcoal w-full shadow lg:max-w-2xl pb-2">
      <table class="mt-2">
        <thead>
          <tr class="text-gray-300">
            <th><!--Name--></th>
            <th><!--Flags--></th>
            <th class="text-left">MP</th>
            <th class="text-left">W</th>
            <th class="text-left">D</th>
            <th class="text-left">L</th>
            <th class="text-left hidden lg:block">GF</th>
            <th class="text-left">GD</th>
            <th class="text-left pr-4">PT</th>
          </tr>
        </thead>
        <tbody>
          {{#each this.orderedTotals as |standing index|}}
            <Euros::Standings::Row @standing={{standing}} @index={{index}} @totalRows={{this.orderedTotals.length}}/>
          {{/each}}
        </tbody>
      </table>
    </div>
  </div>
  */
  {
    "id": "0mEvp794",
    "block": "[[[10,0],[14,0,\"flex flex-col items-center space-y-4 p-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"flex flex-col flex-grow rounded-xl bg-charcoal w-full shadow lg:max-w-2xl pb-2\"],[12],[1,\"\\n    \"],[10,\"table\"],[14,0,\"mt-2\"],[12],[1,\"\\n      \"],[10,\"thead\"],[12],[1,\"\\n        \"],[10,\"tr\"],[14,0,\"text-gray-300\"],[12],[1,\"\\n          \"],[10,\"th\"],[12],[3,\"Name\"],[13],[1,\"\\n          \"],[10,\"th\"],[12],[3,\"Flags\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left\"],[12],[1,\"MP\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left\"],[12],[1,\"W\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left\"],[12],[1,\"D\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left\"],[12],[1,\"L\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left hidden lg:block\"],[12],[1,\"GF\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left\"],[12],[1,\"GD\"],[13],[1,\"\\n          \"],[10,\"th\"],[14,0,\"text-left pr-4\"],[12],[1,\"PT\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"orderedTotals\"]]],null]],null],null,[[[1,\"          \"],[8,[39,2],null,[[\"@standing\",\"@index\",\"@totalRows\"],[[30,1],[30,2],[30,0,[\"orderedTotals\",\"length\"]]]],null],[1,\"\\n\"]],[1,2]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"standing\",\"index\"],false,[\"each\",\"-track-array\",\"euros/standings/row\"]]",
    "moduleName": "euros/components/euros/standings.hbs",
    "isStrictMode": false
  });

  let EurosStandingsComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember.inject.service, (_class = class EurosStandingsComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);

      _initializerDefineProperty(this, "sweepstakes", _descriptor, this);

      _initializerDefineProperty(this, "teamStandings", _descriptor2, this);

      _initializerDefineProperty(this, "api", _descriptor3, this);

      this.api.model.standings.flatMap(groupStanding => groupStanding.items).forEach(teamStanding => {
        this.teamStandings[teamStanding.team.countryCode] = teamStanding;
      });
    }

    get totals() {
      return this.sweepstakes.players.map(player => {
        let playerStanding = {
          drawn: 0,
          goalDifference: 0,
          goalsAgainst: 0,
          goalsFor: 0,
          isLive: false,
          lost: 0,
          played: 0,
          points: 0,
          won: 0,
          player: player
        };
        player.teams.forEach(countryCode => {
          let teamStanding = this.teamStandings[countryCode];

          if (teamStanding) {
            playerStanding.played += teamStanding.played;
            playerStanding.points += teamStanding.points;
            playerStanding.drawn += teamStanding.drawn;
            playerStanding.goalDifference += teamStanding.goalDifference;
            playerStanding.goalsAgainst += teamStanding.goalsAgainst;
            playerStanding.goalsFor += teamStanding.goalsFor;
            playerStanding.lost += teamStanding.lost;
            playerStanding.won += teamStanding.won;
            playerStanding.isLive ||= teamStanding.isLive;
          }
        });
        return playerStanding;
      });
    }

    get orderedTotals() {
      return this.totals.sort((a, b) => {
        if (a.points < b.points) return 1;
        if (a.points > b.points) return -1;
        if (a.goalDifference < b.goalDifference) return 1;
        if (a.goalDifference > b.goalDifference) return -1;
        if (a.goalsFor < b.goalsFor) return 1;
        if (a.goalsFor > b.goalsFor) return -1;
        if (a.won < b.won) return 1;
        if (a.won > b.won) return -1; // Need to update this to do head to head match up if this is still equal

        return 0;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "sweepstakes", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "teamStandings", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "api", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = EurosStandingsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, EurosStandingsComponent);
});
;define("euros/components/euros/standings/row", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <tr class="text-white text-lg {{if (eq @index 0) 'bg-green-900'}} {{if (eq (inc @index) @totalRows) 'bg-red-900'}} bg-opacity-30">
    <td>
      <div class="flex flex-row space-x-2 items-center p-2 pl-4 fit-content">
        <img src="/euros/assets/{{@standing.player.image}}" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" title={{@standing.player.name}}/>
        <div class="uppercase">{{@standing.player.name}}</div>
      </div>
    </td>
    <td>
      <div class="flex flex-row space-x-1 lg:space-x-2 items-center flex-shrink-0 fit-content">
        {{#each @standing.player.teams as |countryCode|}}
          <img src="/euros/assets/svg/flags/{{countryCode}}.svg" class="h-4 lg:h-6 rounded-sm"/>
        {{/each}}
      </div>
    </td>
    <td class="p-1 lg:p-2">{{@standing.played}}</td>
    <td class="p-1 lg:p-2">{{@standing.won}}</td>
    <td class="p-1 lg:p-2">{{@standing.drawn}}</td>
    <td class="p-1 lg:p-2">{{@standing.lost}}</td>
    <td class="p-1 lg:p-2 hidden lg:block">{{@standing.goalsFor}}</td>
    <td class="p-1 lg:p-2">{{@standing.goalDifference}}</td>
    <td class="p-1 lg:p-2 pr-4">{{@standing.points}}</td>
  </tr>
  */
  {
    "id": "VT5Wok9a",
    "block": "[[[10,\"tr\"],[15,0,[29,[\"text-white text-lg \",[52,[28,[37,1],[[30,1],0],null],\"bg-green-900\"],\" \",[52,[28,[37,1],[[28,[37,2],[[30,1]],null],[30,2]],null],\"bg-red-900\"],\" bg-opacity-30\"]]],[12],[1,\"\\n  \"],[10,\"td\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"flex flex-row space-x-2 items-center p-2 pl-4 fit-content\"],[12],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[29,[\"/euros/assets/\",[30,3,[\"player\",\"image\"]]]]],[14,0,\"inline-block h-6 w-6 rounded-full ring-2 ring-white\"],[15,\"title\",[30,3,[\"player\",\"name\"]]],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"uppercase\"],[12],[1,[30,3,[\"player\",\"name\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"td\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"flex flex-row space-x-1 lg:space-x-2 items-center flex-shrink-0 fit-content\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,3,[\"player\",\"teams\"]]],null]],null],null,[[[1,\"        \"],[10,\"img\"],[15,\"src\",[29,[\"/euros/assets/svg/flags/\",[30,4],\".svg\"]]],[14,0,\"h-4 lg:h-6 rounded-sm\"],[12],[13],[1,\"\\n\"]],[4]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2\"],[12],[1,[30,3,[\"played\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2\"],[12],[1,[30,3,[\"won\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2\"],[12],[1,[30,3,[\"drawn\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2\"],[12],[1,[30,3,[\"lost\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2 hidden lg:block\"],[12],[1,[30,3,[\"goalsFor\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2\"],[12],[1,[30,3,[\"goalDifference\"]]],[13],[1,\"\\n  \"],[10,\"td\"],[14,0,\"p-1 lg:p-2 pr-4\"],[12],[1,[30,3,[\"points\"]]],[13],[1,\"\\n\"],[13]],[\"@index\",\"@totalRows\",\"@standing\",\"countryCode\"],false,[\"if\",\"eq\",\"inc\",\"each\",\"-track-array\"]]",
    "moduleName": "euros/components/euros/standings/row.hbs",
    "isStrictMode": false
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("euros/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("euros/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("euros/data/ashbourne", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  const data = [{
    name: 'Dyl',
    teams: ['UKR', 'TUR'],
    image: 'ashbourne/dyl.jpg'
  }, {
    name: 'Ingus',
    teams: ['NED', 'CZE'],
    image: 'ashbourne/ingus.jpg'
  }, {
    name: 'Paul',
    teams: ['FRA', 'SUI'],
    image: 'ashbourne/paul.jpg'
  }, {
    name: 'Chris',
    teams: ['CRO', 'SVK'],
    image: 'ashbourne/chris.jpg'
  }, {
    name: 'Mark',
    teams: ['POL', 'RUS'],
    image: 'ashbourne/mark.jpg'
  }, {
    name: 'Darren',
    teams: ['AUT', 'GER'],
    image: 'ashbourne/dk.jpg'
  }, {
    name: 'Gus',
    teams: ['HUN', 'ITA'],
    image: 'ashbourne/gus.jpg'
  }, {
    name: 'Seán',
    teams: ['ENG', 'WAL'],
    image: 'ashbourne/sean.jpg'
  }, {
    name: 'Manus',
    teams: ['ESP', 'MKD'],
    image: 'ashbourne/manus.jpg'
  }, {
    name: 'Faolán',
    teams: ['POR', 'SWE'],
    image: 'ashbourne/faolan.jpg'
  }, {
    name: 'Glen',
    teams: ['BEL', 'FIN'],
    image: 'ashbourne/glen.jpg'
  }, {
    name: 'Steph',
    teams: ['DEN', 'SCO'],
    image: 'ashbourne/steph.jpg'
  }];
  _exports.data = data;
});
;define("euros/data/babb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  const data = [{
    name: 'Colin',
    teams: ['GER', 'SUI', 'CZE'],
    image: 'babb/colin.png'
  }, {
    name: 'Joe',
    teams: ['FRA', 'SWE', 'SCO'],
    image: 'babb/joe.png'
  }, {
    name: 'Paddy',
    teams: ['POR', 'AUT', 'RUS'],
    image: 'babb/paddy.png'
  }, {
    name: 'Coman',
    teams: ['ITA', 'POL', 'HUN'],
    image: 'babb/coman.png'
  }, {
    name: 'Eoin',
    teams: ['ENG', 'TUR', 'SVK'],
    image: 'babb/eoin.png'
  }, {
    name: 'Paul',
    teams: ['NED', 'DEN', 'MKD'],
    image: 'babb/paul.png'
  }, {
    name: 'Stephen',
    teams: ['ESP', 'UKR', 'FIN'],
    image: 'babb/stephen.png'
  }, {
    name: 'Seán',
    teams: ['BEL', 'CRO', 'WAL'],
    image: 'babb/sean.png'
  }];
  _exports.data = data;
});
;define("euros/data/college", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  const data = [{
    name: 'Hender',
    teams: ['ENG', 'DEN', 'MKD'],
    image: 'college/hender.jpg'
  }, {
    name: 'Níall',
    teams: ['ITA', 'RUS', 'UKR'],
    image: 'college/niall.jpg'
  }, {
    name: 'Eoin',
    teams: ['NED', 'POL', 'WAL'],
    image: 'college/eoin.jpg'
  }, {
    name: 'Dan',
    teams: ['GER', 'CRO', 'FIN'],
    image: 'college/dan.jpg'
  }, {
    name: 'Ming',
    teams: ['BEL', 'SWE', 'HUN'],
    image: 'college/ming.jpg'
  }, {
    name: 'Dave',
    teams: ['POR', 'TUR', 'SVK'],
    image: 'college/dave.jpg'
  }, {
    name: 'Dyl',
    teams: ['FRA', 'SUI', 'SCO'],
    image: 'college/dyl.jpg'
  }, {
    name: 'Alan',
    teams: ['ESP', 'AUT', 'CZE'],
    image: 'college/alan.jpg'
  }, {
    name: 'Shane',
    teams: ['NED', 'SWE', 'CZE'],
    image: 'college/shane.jpg'
  }, {
    name: 'Will',
    teams: ['ESP', 'SUI', 'FIN'],
    image: 'college/will.jpg'
  }];
  _exports.data = data;
});
;define("euros/data/pintmen", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  const data = [{
    name: 'Eoin',
    teams: ['FRA', 'SUI', 'FIN'],
    image: 'college/eoin.jpg'
  }, {
    name: 'Peter',
    teams: ['ITA', 'RUS', 'UKR'],
    image: 'pintmen/peter.jpg'
  }, {
    name: 'Austin',
    teams: ['ESP', 'AUT', 'CZE'],
    image: 'pintmen/austin.jpg'
  }, {
    name: 'Sean',
    teams: ['NED', 'POL', 'WAL'],
    image: 'pintmen/sean.jpg'
  }, {
    name: 'Mark',
    teams: ['POR', 'SWE', 'SCO'],
    image: 'pintmen/mark.jpg'
  }, {
    name: 'Dale',
    teams: ['BEL', 'CRO', 'HUN'],
    image: 'pintmen/dale.jpg'
  }, {
    name: 'Martin',
    teams: ['ENG', 'DEN', 'MKD'],
    image: 'pintmen/martin.jpg'
  }, {
    name: 'Serena',
    teams: ['GER', 'TUR', 'SVK'],
    image: 'pintmen/serena.jpg'
  }, {
    name: 'Waheed',
    teams: ['ESP', 'RUS', 'WAL'],
    image: 'pintmen/waheed.jpg'
  }];
  _exports.data = data;
});
;define("euros/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("euros/helpers/app-version", ["exports", "euros/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("euros/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("euros/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
;define("euros/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("euros/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("euros/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("euros/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("euros/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("euros/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("euros/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("euros/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("euros/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("euros/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("euros/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("euros/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("euros/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("euros/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("euros/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("euros/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("euros/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("euros/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("euros/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("euros/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("euros/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
;define("euros/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("euros/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("euros/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("euros/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("euros/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("euros/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("euros/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("euros/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("euros/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("euros/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("euros/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("euros/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("euros/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("euros/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("euros/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("euros/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("euros/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("euros/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("euros/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("euros/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("euros/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("euros/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("euros/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("euros/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("euros/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("euros/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("euros/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("euros/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("euros/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("euros/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("euros/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("euros/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("euros/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("euros/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("euros/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("euros/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("euros/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("euros/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("euros/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("euros/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("euros/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("euros/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
;define("euros/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("euros/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("euros/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("euros/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("euros/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("euros/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("euros/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("euros/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("euros/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("euros/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("euros/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("euros/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("euros/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("euros/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("euros/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("euros/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("euros/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("euros/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("euros/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("euros/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("euros/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("euros/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("euros/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("euros/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("euros/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "euros/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("euros/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("euros/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("euros/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("euros/initializers/export-application-global", ["exports", "euros/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("euros/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("euros/router", ["exports", "euros/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('euros', {
      path: ':id'
    });
  });
});
;define("euros/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Application extends Ember.Route {}

  _exports.default = Application;
});
;define("euros/routes/euros", ["exports", "ember-concurrency-ts", "euros/data/college", "euros/data/pintmen", "euros/data/babb", "euros/data/ashbourne"], function (_exports, _emberConcurrencyTs, _college, _pintmen, _babb, _ashbourne) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Euros = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, (_class = class Euros extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "api", _descriptor, this);

      _initializerDefineProperty(this, "sweepstakes", _descriptor2, this);
    }

    async model(params) {
      if (params.id === 'college') {
        this.sweepstakes.setPlayers(_college.data);
      }

      if (params.id === 'pintmen') {
        this.sweepstakes.setPlayers(_pintmen.data);
      }

      if (params.id === 'babb') {
        this.sweepstakes.setPlayers(_babb.data);
      }

      if (params.id === 'ashbourne') {
        this.sweepstakes.setPlayers(_ashbourne.data);
      }

      await (0, _emberConcurrencyTs.taskFor)(this.api.loadModel).perform();
      (0, _emberConcurrencyTs.taskFor)(this.api.enqueueRefresh).perform();
      return this.api.model;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "api", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "sweepstakes", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Euros;
});
;define("euros/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("euros/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("euros/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("euros/services/api", ["exports", "ember-concurrency", "ember-concurrency-ts"], function (_exports, _emberConcurrency, _emberConcurrencyTs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const standingsEndpoint = `https://standings.uefa.com/v1/standings?groupIds=2006438,2006439,2006440,2006441,2006442,2006443`;
  const fixturesEnpoint = `https://match.uefa.com/v2/matches?matchId=2024441,2024442,2024443,2024444,2024445,2024446,2024447,2024448,2024449,2024450,2024451,2024452,2024453,2024454,2024455,2024456,2024457,2024458,2024459,2024460,2024461,2024462,2024463,2024464,2024465,2024466,2024467,2024468,2024469,2024470,2024471,2024472,2024473,2024474,2024475,2024476,2024477,2024478,2024479,2024480,2024481,2024482,2024483,2024484,2024485,2024486,2024487,2024488,2024489,2024490,2024491`;
  const apiKey = `ceeee1a5bb209502c6c438abd8f30aef179ce669bb9288f2d1cf2fa276de03f4`;
  let Api = (_dec = Ember._tracked, (_class = class Api extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "model", _descriptor, this);
    }

    *loadModel() {
      let result = yield Promise.all([(0, _emberConcurrencyTs.taskFor)(this.loadStandings).perform(), (0, _emberConcurrencyTs.taskFor)(this.loadFixtures).perform()]);
      this.model = {
        standings: [],
        fixtures: []
      };
      this.model = {
        standings: result[0],
        fixtures: result[1]
      };
    }

    *enqueueRefresh() {
      yield (0, _emberConcurrency.timeout)(10_000); //10 seconds

      yield (0, _emberConcurrencyTs.taskFor)(this.loadModel).perform();
      (0, _emberConcurrencyTs.taskFor)(this.enqueueRefresh).perform();
    }

    *loadFixtures() {
      return yield this.fetch(fixturesEnpoint);
    }

    *loadStandings() {
      return yield this.fetch(standingsEndpoint);
    }

    async fetch(endpoint) {
      let result = await fetch(endpoint, {
        headers: {
          'x-api-key': apiKey
        }
      });
      return await result.json();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "model", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "loadModel", [_emberConcurrency.dropTask], Object.getOwnPropertyDescriptor(_class.prototype, "loadModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "enqueueRefresh", [_emberConcurrency.task], Object.getOwnPropertyDescriptor(_class.prototype, "enqueueRefresh"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadFixtures", [_emberConcurrency.task], Object.getOwnPropertyDescriptor(_class.prototype, "loadFixtures"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadStandings", [_emberConcurrency.task], Object.getOwnPropertyDescriptor(_class.prototype, "loadStandings"), _class.prototype)), _class));
  _exports.default = Api;
});
;define("euros/services/moment", ["exports", "ember-moment/services/moment", "euros/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = Ember;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("euros/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("euros/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("euros/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("euros/services/sweepstakes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Sweepstakes extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "players", void 0);

      _defineProperty(this, "countryMapping", {
        ENG: [],
        DEN: [],
        MKD: [],
        ITA: [],
        RUS: [],
        UKR: [],
        NED: [],
        POL: [],
        WAL: [],
        GER: [],
        CRO: [],
        FIN: [],
        BEL: [],
        SWE: [],
        HUN: [],
        POR: [],
        TUR: [],
        SVK: [],
        FRA: [],
        SUI: [],
        SCO: [],
        ESP: [],
        AUT: [],
        CZE: []
      });
    }

    setPlayers(players) {
      this.players = players;
      this.players.forEach(player => {
        player.teams.forEach(countryCode => {
          this.countryMapping[countryCode].push(player);
        });
      });
    }

  }

  _exports.default = Sweepstakes;
});
;define("euros/tailwind/config", [], function () {
  "use strict";

  const colors = require("tailwindcss/colors");

  const EmberApp = require("ember-cli/lib/broccoli/ember-app");

  const isProduction = EmberApp.env() === 'production';
  module.exports = {
    purge: {
      enabled: isProduction,
      content: ['./app/index.html', './app/templates/**/*.hbs', './app/components/**/*.hbs']
    },
    presets: [],
    darkMode: false,
    // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          boulder: '#0F0F10',
          slate: '#1B1C21',
          charcoal: '#25262B',
          euros: '#0184A4'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
      backdropBlur: theme => theme('blur'),
      backdropBrightness: theme => theme('brightness'),
      backdropContrast: theme => theme('contrast'),
      backdropGrayscale: theme => theme('grayscale'),
      backdropHueRotate: theme => theme('hueRotate'),
      backdropInvert: theme => theme('invert'),
      backdropOpacity: theme => theme('opacity'),
      backdropSaturate: theme => theme('saturate'),
      backdropSepia: theme => theme('sepia'),
      backgroundColor: theme => theme('colors'),
      backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
      },
      backgroundOpacity: theme => theme('opacity'),
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain'
      },
      blur: {
        0: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      brightness: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2'
      },
      borderColor: theme => ({ ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor')
      }),
      borderOpacity: theme => theme('opacity'),
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none'
      },
      contrast: {
        0: '0',
        50: '.5',
        75: '.75',
        100: '1',
        125: '1.25',
        150: '1.5',
        200: '2'
      },
      container: {},
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        help: 'help',
        'not-allowed': 'not-allowed'
      },
      divideColor: theme => theme('borderColor'),
      divideOpacity: theme => theme('borderOpacity'),
      divideWidth: theme => theme('borderWidth'),
      dropShadow: {
        sm: '0 1px 1px rgba(0,0,0,0.05)',
        DEFAULT: ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)'],
        md: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'],
        lg: ['0 10px 8px rgba(0, 0, 0, 0.04)', '0 4px 3px rgba(0, 0, 0, 0.1)'],
        xl: ['0 20px 13px rgba(0, 0, 0, 0.03)', '0 8px 5px rgba(0, 0, 0, 0.08)'],
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
        none: '0 0 #0000'
      },
      fill: {
        current: 'currentColor'
      },
      grayscale: {
        0: '0',
        DEFAULT: '100%'
      },
      hueRotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-60': '-60deg',
        '-30': '-30deg',
        '-15': '-15deg',
        0: '0deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        90: '90deg',
        180: '180deg'
      },
      invert: {
        0: '0',
        DEFAULT: '100%'
      },
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none'
      },
      flexGrow: {
        0: '0',
        DEFAULT: '1'
      },
      flexShrink: {
        0: '0',
        DEFAULT: '1'
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      fontSize: {
        xs: ['0.75rem', {
          lineHeight: '1rem'
        }],
        sm: ['0.875rem', {
          lineHeight: '1.25rem'
        }],
        base: ['1rem', {
          lineHeight: '1.5rem'
        }],
        lg: ['1.125rem', {
          lineHeight: '1.75rem'
        }],
        xl: ['1.25rem', {
          lineHeight: '1.75rem'
        }],
        '2xl': ['1.5rem', {
          lineHeight: '2rem'
        }],
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem'
        }],
        '4xl': ['2.25rem', {
          lineHeight: '2.5rem'
        }],
        '5xl': ['3rem', {
          lineHeight: '1'
        }],
        '6xl': ['3.75rem', {
          lineHeight: '1'
        }],
        '7xl': ['4.5rem', {
          lineHeight: '1'
        }],
        '8xl': ['6rem', {
          lineHeight: '1'
        }],
        '9xl': ['8rem', {
          lineHeight: '1'
        }]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
      gap: theme => theme('spacing'),
      gradientColorStops: theme => theme('colors'),
      gridAutoColumns: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
      },
      gridAutoRows: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)'
      },
      gridColumn: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-full': '1 / -1'
      },
      gridColumnEnd: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridColumnStart: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridRow: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-full': '1 / -1'
      },
      gridRowStart: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7'
      },
      gridRowEnd: {
        auto: 'auto',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7'
      },
      gridTemplateColumns: {
        none: 'none',
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        none: 'none',
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))'
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        full: '100%',
        screen: '100vh'
      }),
      inset: (theme, {
        negative
      }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-2/4': '-50%',
        '-3/4': '-75%',
        '-full': '-100%'
      }),
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)'
          }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        },
        pulse: {
          '50%': {
            opacity: '.5'
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem'
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal'
      },
      margin: (theme, {
        negative
      }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing'))
      }),
      maxHeight: theme => ({ ...theme('spacing'),
        full: '100%',
        screen: '100vh'
      }),
      maxWidth: (theme, {
        breakpoints
      }) => ({
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        ...breakpoints(theme('screens'))
      }),
      minHeight: {
        0: '0px',
        full: '100%',
        screen: '100vh'
      },
      minWidth: {
        0: '0px',
        full: '100%',
        min: 'min-content',
        max: 'max-content'
      },
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1'
      },
      order: {
        first: '-9999',
        last: '9999',
        none: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12'
      },
      outline: {
        none: ['2px solid transparent', '2px'],
        white: ['2px dotted white', '2px'],
        black: ['2px dotted black', '2px']
      },
      padding: theme => theme('spacing'),
      placeholderColor: theme => theme('colors'),
      placeholderOpacity: theme => theme('opacity'),
      ringColor: theme => ({
        DEFAULT: theme('colors.blue.500', '#3b82f6'),
        ...theme('colors')
      }),
      ringOffsetColor: theme => theme('colors'),
      ringOffsetWidth: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      ringOpacity: theme => ({
        DEFAULT: '0.5',
        ...theme('opacity')
      }),
      ringWidth: {
        DEFAULT: '3px',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
        45: '45deg',
        90: '90deg',
        180: '180deg'
      },
      saturate: {
        0: '0',
        50: '.5',
        100: '1',
        150: '1.5',
        200: '2'
      },
      scale: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5'
      },
      sepia: {
        0: '0',
        DEFAULT: '100%'
      },
      skew: {
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '-1': '-1deg',
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg'
      },
      space: (theme, {
        negative
      }) => ({ ...theme('spacing'),
        ...negative(theme('spacing'))
      }),
      stroke: {
        current: 'currentColor'
      },
      strokeWidth: {
        0: '0',
        1: '1',
        2: '2'
      },
      textColor: theme => theme('colors'),
      textOpacity: theme => theme('opacity'),
      transformOrigin: {
        center: 'center',
        top: 'top',
        'top-right': 'top right',
        right: 'right',
        'bottom-right': 'bottom right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        left: 'left',
        'top-left': 'top left'
      },
      transitionDelay: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      },
      transitionDuration: {
        DEFAULT: '150ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms'
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        colors: 'background-color, border-color, color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      translate: (theme, {
        negative
      }) => ({ ...theme('spacing'),
        ...negative(theme('spacing')),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-2/4': '-50%',
        '-3/4': '-75%',
        '-full': '-100%'
      }),
      width: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content'
      }),
      zIndex: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
      }
    },
    variantOrder: ['first', 'last', 'odd', 'even', 'visited', 'checked', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus', 'focus-visible', 'active', 'disabled'],
    variants: {
      accessibility: ['responsive', 'focus-within', 'focus'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      animation: ['responsive'],
      appearance: ['responsive'],
      backdropBlur: ['responsive'],
      backdropBrightness: ['responsive'],
      backdropContrast: ['responsive'],
      backdropDropShadow: ['responsive'],
      backdropFilter: ['responsive'],
      backdropGrayscale: ['responsive'],
      backdropHueRotate: ['responsive'],
      backdropInvert: ['responsive'],
      backdropSaturate: ['responsive'],
      backdropSepia: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundBlendMode: ['responsive'],
      backgroundClip: ['responsive'],
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundImage: ['responsive'],
      backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      blur: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxDecorationBreak: ['responsive'],
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      boxSizing: ['responsive'],
      brightness: ['responsive'],
      clear: ['responsive'],
      container: ['responsive'],
      contrast: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      divideColor: ['responsive', 'dark'],
      divideOpacity: ['responsive', 'dark'],
      divideStyle: ['responsive'],
      divideWidth: ['responsive'],
      dropShadow: ['responsive'],
      fill: ['responsive'],
      filter: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontVariantNumeric: ['responsive'],
      fontWeight: ['responsive'],
      gap: ['responsive'],
      gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
      grayscale: ['responsive'],
      gridAutoColumns: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridAutoRows: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridColumnStart: ['responsive'],
      gridRow: ['responsive'],
      gridRowEnd: ['responsive'],
      gridRowStart: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridTemplateRows: ['responsive'],
      height: ['responsive'],
      hueRotate: ['responsive'],
      inset: ['responsive'],
      invert: ['responsive'],
      isolation: ['responsive'],
      justifyContent: ['responsive'],
      justifyItems: ['responsive'],
      justifySelf: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      mixBlendMode: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      order: ['responsive'],
      outline: ['responsive', 'focus-within', 'focus'],
      overflow: ['responsive'],
      overscrollBehavior: ['responsive'],
      padding: ['responsive'],
      placeContent: ['responsive'],
      placeItems: ['responsive'],
      placeSelf: ['responsive'],
      placeholderColor: ['responsive', 'dark', 'focus'],
      placeholderOpacity: ['responsive', 'dark', 'focus'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
      ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
      ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
      ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
      ringWidth: ['responsive', 'focus-within', 'focus'],
      rotate: ['responsive', 'hover', 'focus'],
      saturate: ['responsive'],
      scale: ['responsive', 'hover', 'focus'],
      sepia: ['responsive'],
      skew: ['responsive', 'hover', 'focus'],
      space: ['responsive'],
      stroke: ['responsive'],
      strokeWidth: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOverflow: ['responsive'],
      textTransform: ['responsive'],
      transform: ['responsive'],
      transformOrigin: ['responsive'],
      transitionDelay: ['responsive'],
      transitionDuration: ['responsive'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      translate: ['responsive', 'hover', 'focus'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive', 'focus-within', 'focus']
    },
    plugins: []
  };
});
;// Simply so tailwind intellisense will work
define("euros/tailwind/tailwind.config", [], function () {
  "use strict";
});
;define("euros/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ibZUUAWc",
    "block": "[[[10,0],[14,0,\"absolute inset-0 overflow-auto bg-slate\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"sticky flex flex-row justify-center top-0 p-2 bg-boulder border-b-2 border-euros rounded-b-md shadow-sm\"],[12],[1,\"\\n    \"],[10,\"embed\"],[14,\"src\",\"/euros/assets/svg/logo.svg\"],[14,0,\"max-h-6\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"flex flex-col flex-1 h-full\"],[12],[1,\"\\n    \"],[46,[28,[37,1],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "euros/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("euros/templates/euros", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MWXhOSnZ",
    "block": "[[[8,[39,0],null,[[\"@standings\",\"@fixtures\"],[[30,1,[\"standings\"]],[30,1,[\"fixtures\"]]]],null]],[\"@model\"],false,[\"euros\"]]",
    "moduleName": "euros/templates/euros.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("euros/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("euros/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("euros/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("euros/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('euros/config/environment', [], function() {
  var prefix = 'euros';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("euros/app")["default"].create({"name":"euros","version":"0.0.0+374cbbc3"});
          }
        
//# sourceMappingURL=euros.map
