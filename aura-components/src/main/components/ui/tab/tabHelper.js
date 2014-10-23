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
    setActive: function(cmp, active) {
        // Used to do the work in here, now does it in the cmp as expressions, so just set the property.
        cmp.set("v.active", active);

    	// var tabEl = cmp.find('tabBody').getElement();
    	// if (!tabEl) {
    	//     return;
    	// }
    	// if (active) {
    	// 	//$A.util.addClass(tabEl, 'active');
    	// 	tabEl.setAttribute("aria-expanded", "true");
    	// } else {
    	// 	//$A.util.removeClass(tabEl, 'active');
    	// 	tabEl.setAttribute("aria-expanded", "false");
    	// }
    }
})
