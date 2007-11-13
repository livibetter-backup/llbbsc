/*
 * Copyright 2007 Yu-Jie Lin
 * 
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or (at your
 * option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
 * License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * LLBB Incomplete JavaScript Library - A Creation from needs of LLBB
 *
 * Author		: Yu-Jie Lin
 * Website	   : http://www.livibetter.com
 * Creation Date : 2007-10-30T10:39:24+0800
 */

/* Date
 * ===================================== */

function DateDiffM(date1, date2) {
	var date1 = new Date(date1);
	var date2 = new Date(date2);
	if (date1 > date2) {
		var date = new Date(date1);
		date1 = new Date(date2);
		date2 = new Date(date);
		}

	var dY = 0;
	while (date1<date2) {
		date1.setUTCFullYear(date1.getUTCFullYear() + 1);
		if (date1 > date2) {
			date1.setUTCFullYear(date1.getUTCFullYear() - 1);
			break;
			}
		dY++;
		};
	
	var dM = 0;
	while (date1<date2) {
		var m = date1.getUTCMonth();
		// Last month?
		if (m < 11)
			date1.setUTCMonth(m + 1);
		else
			date1.setUTCFullYear(date1.getUTCFullYear() + 1, 0);

		if (date1 > date2) {
			m = date1.getUTCMonth();
			if (m > 0)
				date1.setUTCMonth(m - 1);
			else 
				date1.setUTCFullYear(date1.getUTCFullYear() - 1, 11);
			break;
			}
		dM++;
		};

	var d1 = date1.getTime();
	var d2 = date2.getTime();
	var diff = d2 - d1;
	var dD = Math.floor(diff / (24*60*60*1000));
	diff -= dD * 24*60*60*1000;
	var dH = Math.floor(diff / (60*60*1000));
	diff -= dH * 60*60*1000;
	var dMin = Math.floor(diff / (60*1000));
	diff -= dMin * 60*1000;
	var dS = Math.floor(diff/1000);

	return [dY, dM, dD, dH, dMin, dS];
	}

function DateDiff(date1, date2) {
	var date1 = new Date(date1);
	var date2 = new Date(date2);
	if (date1 > date2) {
		var date = new Date(date1);
		date1 = new Date(date2);
		date2 = new Date(date);
		}

	var dY = 0;

	while (date1<date2) {
		date1.setUTCFullYear(date1.getUTCFullYear() + 1);
		if (date1 > date2) {
			date1.setUTCFullYear(date1.getUTCFullYear() - 1);
			break;
			}
		dY++;
		};
	
	var d1 = date1.getTime();
	var d2 = date2.getTime();
	var diff = d2 - d1;
	var dD = Math.floor(diff / (24*60*60*1000));
	diff -= dD * 24*60*60*1000;
	var dH = Math.floor(diff / (60*60*1000));
	diff -= dH * 60*60*1000;
	var dM = Math.floor(diff / (60*1000));
	diff -= dM * 60*1000;
	var dS = Math.floor(diff/1000);

	return [dY, dD, dH, dM, dS];
	}


/* Format
 * ===================================== */

function PaddingFront(num, pad) {
	if (pad == null)
		pad = '00';
	var s = num.toString();
	if (s.length >= pad.length) return s;
	return pad.substring(0, pad.length - s.length) + s;
	}

function Pluralize(num, p, s) {
	if (p == null)
		p = 's';
	if (s == null)
		s = '';
	return (num == 1) ? s : p;
	}
