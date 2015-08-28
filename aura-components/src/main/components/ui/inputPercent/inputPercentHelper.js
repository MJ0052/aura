/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    doUpdate: function(component, value) {
        if (value) {
            value = value.replace(/%+$/g, '');
        }
        component.set("v.value", value);
    },

    getNumber: function(component) {
        var num = component.get("v.value");
        var scale = component.get("v.valueScale");
        if ($A.util.isFiniteNumber(num) && scale) {
            num *= Math.pow(10, scale);
        }
        return num;
    }
})// eslint-disable-line semi
