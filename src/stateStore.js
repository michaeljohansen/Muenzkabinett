import {dispatch as d3_dispatch} from 'd3-dispatch';
import rebind from 'utility/rebind';
import _assign from 'lodash/assign';
import _forEach from 'lodash/forEach';
import { MARGIN, USER_AGENT } from 'constants';
import hints from 'constants/hints';
import tracker from 'utility/tracker';

const returning = !!localStorage.getItem('returningUser');

var _state = {
  selectedProperties: [],
  selectedLayout: 'pile',
  selectedCoin: null,
  selectedCoins: [],
  coinFilters: [],
  hoveredCoin: null,
  draggedCoin: null,
  transform: {x: 0, y: 0, k: 1},
  transitioning: false,

  dataLoaded: false,
  lowResLoaded: false,
  highResLoaded: false,
  loadingProgress: 0,
  canvasInitialized: false,

  width: window.innerWidth,
  height: window.innerHeight - MARGIN.BOTTOM,

  showIntro: true,
  showInfo: false,
  returningUser: returning,
  allHintsShown: returning ? true : false, // is set to true once all hints have been shown. Is set to false again to restart.
  hintStep: 0, // indicates the current hint step
  showHints: false, // needed to temporarily hide hints to prevent overlappint
  loadingPermitted: !(USER_AGENT.iOS || USER_AGENT.android),
  isMobile: USER_AGENT.iOS || USER_AGENT.android
};

localStorage.setItem('returningUser', true);

var _prevState = {};
var changedProperties = [];

var dispatch = d3_dispatch('change');
var stateStore = {};

stateStore.get = function() {
  return _state;
}

stateStore.didPropertiesChange = function(keys) {
  var changed = false;

  _forEach(keys, (key) => {
    if(changed) return;
    if(changedProperties.indexOf(key) !== -1)
      changed = true;
  });
  return changed;
}

stateStore.getChangedProperties = function() {
  return changedProperties;
}

stateStore.getPrevious = function() {
  return _prevState;
}

stateStore.set = function(newProps, update) {
  _prevState = _state;
  changedProperties = [];

  // Question is whether properties should be new clones of the old ones or not...the updating of canvas object depends on it
  _forEach(newProps, (prop, key) => {
    changedProperties.push(key);
  });

  _state = _assign({}, _state, newProps);
  tracker.update(newProps, _prevState);
  if(update !== false)
    dispatch.call('change', _state, _prevState);
}

export default rebind(stateStore, dispatch, 'on');