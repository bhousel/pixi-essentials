/*!
 * @pixi-essentials/object-pool - v0.0.1-alpha.6
 * Compiled Fri, 17 Apr 2020 22:33:41 UTC
 *
 * @pixi-essentials/object-pool is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_object_pool=function(t,o){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)};var n=function(){function t(t){void 0===t&&(t={}),this._pool=[],this._poolSize=0,this._borrowRate=0,this._returnRate=0,this._flowRate=0,this._currentDemand=0,this.capacityRatio=t.capacityRatio||2,this.decayRatio=t.decayRatio||.99,this._history=0,t.noInstall||this.install()}return t.prototype.borrowObject=function(){return++this._borrowRate,++this._flowRate,this._poolSize>0?this._pool[--this._poolSize]:this.createObject()},t.prototype.returnObject=function(t){++this._returnRate,--this._flowRate,this._poolSize===this._pool.length&&(this._pool.length*=this.capacityRatio),this._pool[this._poolSize]=t,++this._poolSize},t.prototype.install=function(t){var e=this;void 0===t&&(t=o.Ticker.shared),t.add((function(){e._currentDemand*=e.decayRatio,e._currentDemand+=(1-e.decayRatio)*e._borrowRate,0===e._history&&(e._currentDemand=e._borrowRate),++e._history,e._currentDemand=Math.ceil(e._currentDemand),e._flowRate=0,e._borrowRate=0,e._returnRate=0;var t=e._poolSize,o=e._pool.length;if(!(t<128&&e._currentDemand<128&&o<128)){var n=e._currentDemand<0?0:e._currentDemand;t>=2*n&&(e._pool.length=n,e._poolSize=e._pool.length)}}),null,o.UPDATE_PRIORITY.UTILITY)},t}(),r=new Map,i=function(){function t(){}return t.build=function(t){var o=r.get(t);return o||(o=new(function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}(n,o),n.prototype.createObject=function(){return new t},n}(n)),r.set(t,o),o)},t}();return t.ObjectPool=n,t.ObjectPoolFactory=i,t}({},PIXI);Object.assign(this.PIXI,_pixi_essentials_object_pool);
//# sourceMappingURL=pixi-object-pool.js.map