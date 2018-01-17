var j104Widget = function(oo) {
	if (oo) {
		for (p in oo) {
			this.s[p] = oo[p] + " !important";
		};
		var tmpOnload = window.onload,
			func = function() {
				var vb = document.getElementsByTagName('body')[0];
				var tmpIMG = document.createElement('IMG');
				tmpIMG.cssText = "width:0px;height:0px;";
				tmpIMG.style.display = "none";
				tmpIMG.src = "http://www.104.com.tw/jobbank/area/edm/etb/jcb.cfm?ac=i&h=" + encodeURIComponent(location.href);
				vb.appendChild(tmpIMG);
			};
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				tmpOnload();
				func();
			}
		}
	};
	this.did = "__j104Widget_" + this.__random_();
};
j104Widget.prototype.s = {
	"sc": "#000 !important",
	"stc": "#000 !important",
	"sw": "400px !important",
	"fs": "0.9em !important",
	"fts": "1.1em !important",
	"sh": "auto !important",
	"bc": "#fff !important",
	"bs": "1px solid #000 !important",
	"bbs": "none !important"
};
j104Widget.prototype.sObj = {
	"__$": function(obj) {
		return (typeof(obj) == "object") ? obj : document.getElementById(obj);
	},
	"setStyle": function(ele, tag, style, css, s) {
		if (s && s.indexOf('s') != -1) {
			var bb = ele.getElementsByTagName(tag),
				i = 0;
			var len = bb.length;
			if (s.indexOf('c') != -1) {
				while (i < len) {
					bb[i].setAttribute("style", bb[i].style.cssText + ";" + style + ":" + css);
					i++;
				}
			} else {
				while (i < len) {
					bb[i].setAttribute("style", bb[i].style.cssText + ";" + style + ":" + css + ' !important');
					i++;
				}
			}
		} else {
			this.__$(ele).setAttribute("style", this.__$(ele).style.cssText + ";" + style + ":" + css);
		}
	},
	"sc": function(element, css) {
		if (this.__$(element)) {
			this.setStyle(this.__$(element), "P", "color", css, "sc");
			this.setStyle(this.__$(element), "DIV", "color", css, "sc");
			this.setStyle(this.__$(element), "SPAN", "color", css, "sc");
		}
	},
	"stc": function(element, css) {
		if (this.__$(element)) {
			this.setStyle(this.__$(element), "A", "color", css, "sc");
		}
	},
	"sw": function(ele, w) {
		this.__$(ele).setAttribute("style", this.__$(ele).style.cssText + ";width: " + w + " !important");
	},
	"sh": function(ele, h) {
		this.__$(ele).setAttribute("style", this.__$(ele).style.cssText + ";height: " + h + " !important");
	},
	"fs": function(element, css) {
		if (this.__$(element)) {
			this.setStyle(this.__$(element), "P", "font-size", css, "sf");
			this.setStyle(this.__$(element), "DIV", "font-size", css, "sf");
			this.setStyle(this.__$(element), "SPAN", "font-size", css, "sf");
		}
	},
	"fts": function(element, css) {
		if (this.__$(element)) {
			this.setStyle(this.__$(element), "A", "font-size", css, "bs");
		}
	},
	"bc": function(element, css) {
		if (this.__$(element)) {
			this.setStyle(this.__$(element), "", "background-color", css, "bc");
		}
	},
	"bs": function(element, css) {
		if (this.__$(element)) {
			this.__$(element).setAttribute("style", this.__$(element).style.cssText + ";border:" + css + " !important");
		}
	}
};
_layer104_20101005_c_d = false;

function __be104MoreThing(o) {
	var d = document.getElementById('__be104MoreThing_div_');
	if (d.style.display != 'none') return false;
	d.style.cssText = 'display:none; position:absolute;';

	function __getPos_104__(e) {
		var t = e.offsetTop;
		var l = e.offsetLeft;
		while (e = e.offsetParent) {
			t += e.offsetTop;
		};
		return {
			x: l,
			y: t
		};
	}
	_oPos = __getPos_104__(o);
	var str = "<ul id='__ul_104bejList20101005' style='font-size:11px !important; margin:0 !important; padding:0 !important;'>";
	str += "<li style='line-height:20px; font-size:11px !important; margin:0 !important;list-style-type: none !important;'><a href='http://www.104.com.tw/i/api_doc/jobsearch/qjob.cfm?p_from=sticker&kws=nexio&c=130000000057618'target='_blank'>打造我的工作貼紙</a></li>";
	str += "<li style='line-height:20px; font-size:11px !important; margin:0 !important;list-style-type: none !important;'><a href='http://www.104.com.tw/i/api_doc/jobsearch/intro.cfm?p_from=sticker' target='_blank'>什麼是工作貼紙?</a></li>";
	str += "</ul><div style='margin-left:100px; position:absolute; padding:5px; background:url(http://www.104.com.tw/i/api_doc/jobsearch/img/godown.png) no-repeat!important; margin-top:5px'></div>";
	d.innerHTML = str;
	d.style.display = 'block';
	d.style.cssText = "border:1px solid #f00; background:#fff !important; position:absolute; top:" + (_oPos.y - document.getElementById("__ul_104bejList20101005").offsetHeight - o.offsetHeight) + "px; left:" + (_oPos.x - document.getElementById("__ul_104bejList20101005").offsetWidth - 20) + "px; padding:5px !important;width:130px !important; font-size:12px !important;border:1px solid #050505 !important;z-index:999;";
	d.onmouseover = function() {
		_layer104_20101005_c_d = false;
	};
	d.onmouseout = function() {
		_layer104_20101005_c_d = true;
	};
	o.onmouseover = d.onmouseover;
	o.onmouseout = d.onmouseout;
	window.onclick = function() {
		setTimeout(function() {
			if (_layer104_20101005_c_d) {
				d.style.display = 'none';
			}
		}, 100);
	};
	return false;
};
j104Widget.prototype.jobdata = {
	data: [{
		"APPEAR_DATE": "20180116",
		"C": "4e3c446d3638406932343c653a40381b82b2b2b29435e382664j01",
		"DESCRIPTION": "As an entertainment tech venture of Nogle, Nexio delivers value driven online \ngaming products including captivating games and a complete backend \nmanagement system for online gaming businesses.\n\nRoles and Responsibilities :\n- Understand the requirements of a project so as to design the systems infrastructure\n- Design the systems infrastructure to ensure high availability and security\n- Implement / configure systems (CentOS)\n- Troubleshoot systems problems\n- Secure systems by implementing policies / access\n- Monitoring of systems performance to ensure maximum usage of systems resources\n- Assist with the continue integration and continuous delivery of codes into staging / production environment\n- Implement automation tools to enhance the productivity of systems team\n\nRequirement:\n- Layer7 service configuration, such as Nginx, Firewall, etc.\n- Use automation framework to apply in enterprise environment, such as \nAnsible, Puppet.\n- Integrate monitoring and alert system to easily capture system/application \nabnormal behavior\n- Working experience to setup container or provision environment to support \nCI/CD, such as Docker, Open Stack\n- Able to write shell script to automate routine tasks\n\nSkill:\n- CentOS / Linux\n- Shell scripting / python\n- Setup / configuration of Kubernetes, Docker, Nginx, Nagios, Kafka, \nZookeeper, Ansible, Graphite, etc\n- Linux trouble shooting tools and commands\n- Layer4 to Layer7 concept",
		"INDCAT": "Information Technology",
		"J": "483a44265e6c492434583b1f402e365f2383a426b34363e673c423a1d1d1d1d1d04570363189j56",
		"JOB": "System Engineer - Nexio (Nogle Venture)",
		"JOB_ADDR_NO_DESCRIPT": "台北市內湖區",
		"MAJOR_CAT_DESCRIPT": "類目@類目@類目",
		"MINBINARY_EDU": "8",
		"MINBINARY_EDU_DESC": "大學（學院）",
		"NAME": "Nogle Taiwan Limited_諾傑股份有限公司",
		"PERIOD": "03",
		"PERIOD_DESC": "二年以上工作經驗"
	}, {
		"APPEAR_DATE": "20180116",
		"C": "4e3c446d3638406932343c653a40381b82b2b2b29435e382664j01",
		"DESCRIPTION": "A fast growing online gaming supplier is looking for an Accountant to be based in Taiwan. \n\nJob Responsibilities:\n- Conduct all day-to-day accounting and finance-related work (AP/AR/GL/Reporting/Tax/Treasure)\n- Manage Accounting System - NAV (Build up & launch new accounting system-NAV \n- Prepare budget, forecast and needed variance analysis\n- Ad hoc financial improvement projects and initiatives",
		"INDCAT": "Information Technology",
		"J": "503a44245e6c492434583b1f402e365f2383a426b34363e673c423a1d1d1d1d1a74460363189j48",
		"JOB": "Accountant - Nexio (Nogle Venture)",
		"JOB_ADDR_NO_DESCRIPT": "台北市內湖區",
		"MAJOR_CAT_DESCRIPT": "類目@類目@類目",
		"MINBINARY_EDU": "8",
		"MINBINARY_EDU_DESC": "大學（學院）",
		"NAME": "Nogle Taiwan Limited_諾傑股份有限公司",
		"PERIOD": "02",
		"PERIOD_DESC": "一年以上工作經驗"
	}, {
		"APPEAR_DATE": "20180116",
		"C": "4e3c446d3638406932343c653a40381b82b2b2b29435e382664j01",
		"DESCRIPTION": "Job Description:\n▪ Requirements analysis. Read and understand business requirements from \ndeveloper to suggest better design solution\n▪ Build database foundation skills, like interpreting execution plan, functions, design principal, trouble shooting, etc\n▪ Identify critical monitoring metrics regarding to database, No SQL, and \nanalysis package\n▪ Capable of using script to automate deployment process during each \nregular/hotfix build.\n▪ Research cutting edge solutions to enrich current tools, management \nconsole, etc\n▪ Demonstrate expertise on database, NoSQL related experience when \ndevelopment suffers from slow performance or high resource consumption\n▪ Work with team members to communicate impact, risk and performance \ngain when utilizing new solution\n▪ Perform database related design review, especially on schema design, sql, \nindex, etc\n\nRequirement\n▪ 1-3-year experience in PostgreSQL/MySQL/Oracle operation\n▪ Experience in bottleneck identification, related to SQL/NoSQL operations\n▪ Familiar with database day to day operation items, such as backup, restore, \nupgrade\n▪ Experience with system and database monitoring, including network \nconnection, system status, sql execution plan\n▪ Experience with utilizing tools, scripts to solve routine tasks\n\nSkill\n▪ ANSI SQL and PostgreSQL extension syntax\n▪ Database Algebra and join performance\n▪ Performance tuning on system kernel parameters\n▪ Implement security checks, audit, reports on database machines\n▪ Provide data modeling and ETL methodology\n▪ NoSQL design and tuning is plus\n▪ In memory and analysis solution is plus",
		"INDCAT": "Information Technology",
		"J": "5751492e6573502b3b5f422647353d6643f4149723b3d456e434941242424242314c77493816j55",
		"JOB": "DBA Developer - Nexio (Nogle Venture)",
		"JOB_ADDR_NO_DESCRIPT": "台北市內湖區",
		"MAJOR_CAT_DESCRIPT": "類目@類目@類目",
		"MINBINARY_EDU": "8",
		"MINBINARY_EDU_DESC": "大學（學院）",
		"NAME": "Nogle Taiwan Limited_諾傑股份有限公司",
		"PERIOD": "03",
		"PERIOD_DESC": "二年以上工作經驗"
	}, {
		"APPEAR_DATE": "20180111",
		"C": "4e3c446d3638406932343c653a40381b82b2b2b29435e382664j01",
		"DESCRIPTION": "- To assist in the analysis of design specifications in order to produce comprehensive test scripts and scenarios for expected results to be performed manually and using automated testing tools\n- To assist in the system testing of new applications and existing software enhancements to ensure they meet design specifications.\n- To assist in Functionality Testing of new applications and existing software enhancements to ensure they meet business requirements through performing end to end business scenario tests \n- To assist in Regression Testing of new applications and existing software enhancements to identify any possible impacts caused by changes. \n- Recording of test results \n- To assist in the maintenance and management of manual and automated scripts & test databases \n- To assist in the verification and evidence of reproduction of any reported faults in existing software. \n- To assist in the testing of fixes required for reported faults, including tests for possible impacts from changes.\n- Ensure all work produced meets customer requirements before being released for internal approval \n- Ensure all work meets the guidelines & standards defined for the team and the company \n- Identify and resolve errors in work\n- To follow up with the fault report cases and cooperate closely with related engineers\n- Implement automated testing and tools to improve the efficiency and effectiveness\n- Involvement in development stage",
		"INDCAT": "Information Technology",
		"J": "6365472a63714e29395d402445333b6423d3f4770393b436c41473f222222222194b4f4f3634j51",
		"JOB": "Software QA Tester - Nexio (Nogle Venture)",
		"JOB_ADDR_NO_DESCRIPT": "台北市內湖區",
		"MAJOR_CAT_DESCRIPT": "類目@類目@類目",
		"MINBINARY_EDU": "8",
		"MINBINARY_EDU_DESC": "大學（學院）",
		"NAME": "Nogle Taiwan Limited_諾傑股份有限公司",
		"PERIOD": "00",
		"PERIOD_DESC": "工作經驗不拘"
	}, {
		"APPEAR_DATE": "20180111",
		"C": "4e3c446d3638406932343c653a40381b82b2b2b29435e382664j01",
		"DESCRIPTION": "Responsibilities:\n- Monitor and order office and pantry supplies\n- Be the liaison ofvendors and taking care of the general maintenance of the office\n- Greeting and directing customers in a professional and timely manner (phone and in person)\n- Organize staff events and other team building activities ( birthday, annual dinner party, etc)\n- Basic back office financial management (budget control, and process payment request & data analysis (annual budget preparation)\n- Other general administration duties as required\n \n- 行政庶務工作(辦公用品、茶水間等用品購買)\n- 與廠商協調溝通及辦公用品/資產相關維護作業\n- 電話及訪客接待\n- 公司活動規劃與執行 (生日活動，年度尾牙等)\n- 行政管理費用之財務管理(採購預算控制及請款作業)及資料分析(年度預算規劃)\n- 主管其他交辦事項",
		"INDCAT": "Information Technology",
		"J": "66684a2d6674512c3c60432748363e67540424a733c3e466f444a42252525252424e42463907j54",
		"JOB": "Office Administrator 行政助理 - Nexio (Nogle Venture)",
		"JOB_ADDR_NO_DESCRIPT": "台北市內湖區",
		"MAJOR_CAT_DESCRIPT": "類目@類目@類目",
		"MINBINARY_EDU": "8",
		"MINBINARY_EDU_DESC": "大學（學院）",
		"NAME": "Nogle Taiwan Limited_諾傑股份有限公司",
		"PERIOD": "02",
		"PERIOD_DESC": "一年以上工作經驗"
	}]
};
j104Widget.prototype.query_desc = "nexio、自訂公司130000000057618";
j104Widget.prototype.spec_desc = "";
j104Widget.prototype.__random_ = function() {
	return Math.round(Math.random() * 9999999999999);
};
j104Widget.prototype.output = function() {
	var d = this.jobdata.data;
	var __out_str__layout = "",
		i = 0,
		__data_len_ = d.length;

	function dc(o, idx) {
		return (d && d[idx][o] && d[idx][o] != '') ? true : false;
	};

	function getTimeDesc(t) {
		if (t.length == 8 && t.match(/[0-9]{8}/)) {
			var _b = new Date();
			var _d = new Date();
			_d.setFullYear(t.substring(0, 4), 10);
			_d.setMonth(parseInt(t.substring(4, 6), 10) - 1);
			_d.setDate(t.substring(6, 8));
			var _r = _b.getTime() - _d.getTime();
			_b = null;
			_d = null;
			_r = _r / 86400000;
			if (_r > 60) {
				return "二個月以前";
			} else if (_r > 30) {
				return "一個月以前";
			} else if (_r > 21) {
				return "三週以前";
			} else if (_r > 14) {
				return "二週以前";
			} else if (_r > 7) {
				return "一週以前";
			} else if (_r < 1) {
				return "今天";
			} else {
				return _r + "天以前";
			}
		}
	}
	sps = "font-size:" + this.s.fs + ";color:" + this.s.sc + ";";
	str = "<div id='" + this.did + "' style='margin-bottom:2px !important; overflow:auto; overflow-x:hidden !important;padding:6px 5px !important;border:" + this.s.bs + ";background:" + this.s.bc + ";;width:" + this.s.sw + ";height:" + this.s.sh + ";" + sps + "'>";
	sps += "";
	if (__data_len_ == 0) {
		str += "目前此條件沒有職缺供應</div>";
	} else {
		while (i < __data_len_) {
			if (dc("JOB", i)) {
				var __tmpS = (this.s.sw).replace('px !important', '');
				var _cn = "";
				if (dc("NAME", i) && d[i].NAME.replace(/^\s+|\s+$/, "") == "104外包網") {
					str += "<div style='font-family:\"細明體\",arial, serif !important;font-size:inherit !important;text-align:left !important;'><a title='" + d[i].JOB + "' target='_blank' href='http://wwww.104case.com.tw/seek_view.cfm?prj=006&jcat=1&caseno=" + d[i].J + "' style='line-height:1.2em !important;color:" + this.s.stc + ";font-size:" + this.s.fts + ";border:" + this.s.bbs + ";float:left; width:" + (__tmpS - 50) + "px !important; overflow:hidden;white-space:nowrap;*white-space:nowrap !important;*white-space:normal;'>" + d[i].JOB + "</a>";
					_cn = "<a href='http://wwww.104case.com.tw'>104外包網</a>";
				} else {
					str += "<div style='font-family:\"細明體\",arial, serif !important;font-size:inherit !important;'><a title='" + d[i].JOB + "' target='_blank' href='http://www.104.com.tw/104i/redir.cfm?i_from=qjob&t=job&j=" + d[i].J + "' style='line-height:1.2em !important;color:" + this.s.stc + ";font-size:" + this.s.fts + ";border:" + this.s.bbs + ";float:left; width:" + (__tmpS - 50) + "px !important; overflow:hidden;white-space:nowrap;*white-space:nowrap !important;*white-space:normal;'>" + d[i].JOB + "</a>";
					_cn = "<a title='" + d[i].NAME + "' href='http://www.104.com.tw/104i/redir.cfm?i_from=qjob&t=introduce&j=" + d[i].C + " ' target='_blank' style='float:left !important; width:" + (__tmpS - 50) + "px !important; overflow:hidden;white-space:nowrap;*white-space:nowrap !important;*white-space:normal;'>" + d[i].NAME + "</a>";
				}
				__tmpS = null;
				str += "<div style='font-family:\"細明體\",arial, serif !important;line-height:1.4em !important;float:left !important; margin:1px 15px 1px 10px !important;'>";
				if (dc("NAME", i)) {
					str += "<span class='qjob104_hidn' style='white-space:nowrap !important ;font-family:\"細明體\",arial, serif !important;margin-bottom: 5px !important;'>" + _cn + "</span><br class='qjob104_hidn'>";
				}
				if (dc("MINBINARY_EDU", i) && d[i].MINBINARY_EDU_DESC.replace(/^\s+|\s+$/, '') != "") {
					str += "<span style='font-family:\"細明體\",arial, serif !important;white-space:nowrap !important;" + sps + "'>" + d[i].MINBINARY_EDU_DESC + "</span>";
				};
				if (dc("PERIOD", i) && d[i].PERIOD_DESC.replace(/^\s+|\s+$/, '') != "") {
					str += "<span style='font-family:\"細明體\",arial, serif !important;" + sps + "'>，" + d[i].PERIOD_DESC + "</span>";
				};
				if (dc("JOB_ADDR_NO_DESCRIPT", i)) {
					str += "<span style='font-family:\"細明體\",arial, serif !important;" + sps + "'>，" + d[i].JOB_ADDR_NO_DESCRIPT + "</span>";
				};
				str += "</div>";
				var _ad = "";
				if (dc("APPEAR_DATE", i)) {
					_ad = "<p style='font-family:\"細明體\",arial, serif !important;float:right;margin:1px 3px !important;padding:2px !important;margin-right:10px !important; white-space:nowrap !important;" + sps + "'>" + getTimeDesc(d[i].APPEAR_DATE) + "更新</p>&nbsp; ";
				}
				str += (dc("DESCRIPTION", i)) ? "<div style='line-height:1.3em;font-family:\"細明體\",arial, serif !important;margin:3px 2px !important;padding:5px 10px !important; width:95% !important; " + sps + "; float:left !important;'>" + (d[i].DESCRIPTION.length > 100 ? d[i].DESCRIPTION.substring(0, 100) + "..." : d[i].DESCRIPTION) + _ad + "</div>" : "<div style='line-height:1.3em;font-family:\"細明體\",arial, serif !important;margin:3px 2px !important;padding:5px 10px !important; width:95% !important;float:left !important;'>" + "未填寫" + _ad + "</div>";
				_ad = null;
				str += "</div>";
			}
			i++;
		}
		if (i >= 20) {
			str += "<span class='qjob104_shfull' style='font-family:\"細明體\",arial, serif !important;float:right !important;margin-bottom:10px !important; margin-right:15px !important;'><a href='http://www.104.com.tw/104i/joblist.cfm?i_from=qjob&kws=nexio&c=130000000057618'>看完整結果</a></span></div>";
		} else {
			str += "</div>";
		}
	}
	if (str != "") {
		str += "<span id='_powerby___j104Widget_" + this.did + "' class='qjob104_powby' style='width:" + (parseInt(this.s.sw.replace("px !important", "")) + (this.s.bs.split(" ")[0].replace("px", "") * 2)) + "px; float:left !important; padding:0 9px 3px 0; background:#d9d9d9;'><a href=\'#'></a> ";
		str += "<a style='white-space:nowrap !important; font-family:\"細明體\",arial, serif !important;font-size:12px !important; padding:3px 0 !important; padding-right:14px !important;' href='#' onclick='__be104MoreThing(this); return false;'>更多</a><div style='display:none; position:absolute;' id='__be104MoreThing_div_'></div></span>";
		str += "</span>";
	}
	return str;
}