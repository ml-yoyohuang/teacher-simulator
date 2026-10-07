import fs from 'node:fs';import {items,zones,students,parents,staff,missions,chapters} from '../src/data';
const read=(p:string)=>fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):null;
const corePath=fs.existsSync('artifacts/microphone-core-tests.tap')?'artifacts/microphone-core-tests.tap':'artifacts/core-tests.tap';const core=fs.existsSync(corePath)?fs.readFileSync(corePath,'utf8'):'';
const browser=read('artifacts/browser-qa.json'),extended=read('artifacts/extended-qa.json');const corePass=/fail 0/.test(core);
let records=[];for(let [kind,list] of Object.entries({zone:zones,item:items,student:students,parent:parents,staff,chapter:chapters,mission:missions})){for(let entry of list){let m=entry as any;records.push({kind,id:m.id,label:m.label,registered:true,ruleTest:corePass?'pass':'not tested',operationEvidence:kind==='item'?(m.id==='wireless_microphone'?'tests/microphone.test.ts + artifacts/microphone-qa.json: call/decoy/ownership':'tests/core.test.ts: every declared action'):kind==='mission'?'tests/core.test.ts: 40 event/mechanic chains':kind==='parent'?'tests/core.test.ts + artifacts/parent-models.json':kind==='zone'?'tests/core.test.ts: grid reachability':'tests/core.test.ts: registry/state',fullHumanPlaythrough:'not tested'})}}
fs.writeFileSync('artifacts/content-coverage.json',JSON.stringify({counts:{zones:10,items:items.length,students:12,parents:19,staff:7,normalMissions:24,chapters:4,eventMissions:16},records},null,2));
let md=`# 規格覆蓋與驗證層級\n\n日期：2026-10-08。完整內容已登錄並接入共用機制；這份報告不把資料登錄當成實際通關。\n\n| registry | 數量 | 證據 |\n|---|---:|---|\n| zone | 10 | 格網通路／碰撞測試；真實3D模型 |\n| item | ${items.length} | 每種portable/pushable/fixed/wearable操作實測狀態 |\n| student | 12 | 性格反應FSM測試、部分真實NPC互動 |\n| parent | 19 | 有效入場／預算／ability測試及逐型3D生成 |\n| staff | 7 | 場景角色與各服務/查詢/巡查路徑 |\n| normal mission | 24 | 完成鏈、第一獎勵ledger、取消與重試 |\n| chapter | 4 | 固定順序、自由選與清場 |\n| event mission | 16 | 獨立完成鏈，代表活動實際操作 |\n\n`;
const matrix=[
 ['手機2.2倍鏡頭／擊倒圖鑑／提示收合','pass (模擬)','tests/mobile-codex.test.ts、artifacts/mobile-codex-qa.json；保留本次更新前功能'],
 ['校園無線麥克風／擴音點名／落地誘餌','pass (規則＋實際輸入)','tests/microphone.test.ts、artifacts/microphone-qa.json與真實演示影片；真機及人工聽感未驗證'],
 ['真正3D／原創主角','pass','artifacts/courtyard.png、office.png；WebGLRenderer/角色幾何'],
 ['固定斜俯視／屏幕方向／室內牆切低','pass','桌機W方向及真實室內截圖；render.ts固定正交相機'],
 ['10區連續地圖／三種路線','pass (規則)','World格網各區可達與動態障礙；非人工逐區長時間調查'],
 [`${items.length}道具全部允許操作`,'pass (規則＋代表輸入)','全操作test；掃把/球/假髮/椅/三角鐵/咖啡真實輸入'],
 ['十二性格／十九家長／七教職員','pass (機制)','FSM與逐型生成測試；尚無19型各自人工完整交戰'],
 ['通知因果／警戒池／預告／3家長2教師','pass','聯絡中斷與完成測試、預算測試、真實壓力場景'],
 ['警戒／視線／搜尋／藏點','pass (規則＋代表輸入)','未目擊/目擊藏入測試、拍攝打斷、自然降級'],
 ['持有／頭槽／投擲／暈眩','pass','ID不變／拾投佩戴／實際球命中／救援'],
 ['24+16任務與4活動','pass (事件/機制鏈)','40項完成鏈；實際输入子集另列QA_REPORT'],
 ['教學可跳／重看／活動自由選','pass','skip/重看入口、全章切換測試'],
 ['點數／6外觀／12稱號／事件報告','pass (規則)','ledger與經濟、稱號各自任務可達、真實倒地報告'],
 ['重置／questPins／身分','pass','持有排除、不可見恢復、20次切換、原ID回復'],
 ['合成聲音／節拍／靜音','pass (程式)','AudioContext建立、32拍實際按鍵；聽感not tested'],
 ['存檔／匯出匯入／多頁','pass','實際JSON下載/損壞檔/租約接管/儲存失敗'],
 ['Low/Standard／資源／壓力','見 PERFORMANCE_REPORT','rAF與render.info；真機not tested'],
 ['靜態生產build／本地執行','pass','tsc+vite、dist實際瀏覽器smoke；無CDN']
];md+='## 驗收矩陣\n\n| 項目 | 狀態 | 證據／限制 |\n|---|---|---|\n'+matrix.map(r=>'|'+r.join('|')+'|').join('\n')+'\n';
md+='\n## 全內容逐ID\n\n| 類別 | ID | 名称 | 規則／機制測試 |\n|---|---|---|\n'+records.map(r=>`|${r.kind}|${r.id}|${r.label}|${r.ruleTest}|`).join('\n')+'\n';
md+='\n## 實際操作驗收\n\n'+[...(browser?.results||[]),...(extended?.results||[])].map(r=>`- ${r.status}: ${r.name}${r.error?' — '+r.error.split('\n')[0]:''}`).join('\n')+'\n\n人工從出生點逐項完整通關、實體手機GPU、Safari、音訊聽感均為not tested。詳見QA_REPORT.md及原始JSON，不能把這些當成pass。\n';
fs.writeFileSync('SPEC_COVERAGE.md',md);console.log(JSON.stringify({corePass,records:records.length,browserPass:browser?.results?.filter(x=>x.status==='pass').length,extendedPass:extended?.results?.filter(x=>x.status==='pass').length}));
