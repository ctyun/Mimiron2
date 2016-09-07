const ReactDOM = mimiron2.ReactDOM;
const React = mimiron2.React;

const Page = mimiron2.Page;
const Topbar = mimiron2.Topbar;
const Sidebar = mimiron2.Sidebar;

const DatePicker = mimiron2.DatePicker;
const Button = mimiron2.Button;
const Icon = mimiron2.Icon;
const Collapse = mimiron2.Collapse;
const Panel = Collapse.Panel;
const Checkbox = mimiron2.Checkbox
const CheckboxGroup = Checkbox.Group;
const Radio = mimiron2.Radio;
const RadioGroup = Radio.Group;
const TableRaw = mimiron2.TableRaw;
const Table = mimiron2.Table;
const Ajax = mimiron2.Ajax;
const Input = mimiron2.Input;
const InputGroup = Input.Group;
const Select = mimiron2.Select;
const Cascader = mimiron2.Cascader;
const Misc = mimiron2.Misc;
const SimpleForm = mimiron2.SimpleForm;
const Tabs = mimiron2.Tabs;
const TabPane = Tabs.TabPane;

let province_city_map = [{"children": [{"value": "010", "label": "\u5317\u4eac"}], "value": "609001", "label": "\u5317\u4eac"}, {"children": [{"value": "020", "label": "\u5e7f\u5dde"}, {"value": "660", "label": "\u6c55\u5c3e"}, {"value": "661", "label": "\u6f6e\u9633"}, {"value": "662", "label": "\u9633\u6c5f"}, {"value": "663", "label": "\u63ed\u9633"}, {"value": "668", "label": "\u8302\u540d"}, {"value": "750", "label": "\u6c5f\u95e8"}, {"value": "751", "label": "\u97f6\u5173"}, {"value": "752", "label": "\u60e0\u5dde"}, {"value": "753", "label": "\u6885\u5dde"}, {"value": "754", "label": "\u6c55\u5934"}, {"value": "755", "label": "\u6df1\u5733"}, {"value": "756", "label": "\u73e0\u6d77"}, {"value": "757", "label": "\u4f5b\u5c71"}, {"value": "758", "label": "\u8087\u5e86"}, {"value": "759", "label": "\u6e5b\u6c5f"}, {"value": "760", "label": "\u4e2d\u5c71"}, {"value": "762", "label": "\u6cb3\u6e90"}, {"value": "763", "label": "\u6e05\u8fdc"}, {"value": "765", "label": "\u987a\u5fb7"}, {"value": "766", "label": "\u4e91\u6d6e"}, {"value": "768", "label": "\u6f6e\u5dde"}, {"value": "769", "label": "\u4e1c\u839e"}], "value": "600101", "label": "\u5e7f\u4e1c"}, {"children": [{"value": "021", "label": "\u4e0a\u6d77"}], "value": "600102", "label": "\u4e0a\u6d77"}, {"children": [{"value": "022", "label": "\u5929\u6d25"}], "value": "609902", "label": "\u5929\u6d25"}, {"children": [{"value": "023", "label": "\u91cd\u5e86"}], "value": "600304", "label": "\u91cd\u5e86"}, {"children": [{"value": "024", "label": "\u6c88\u9633"}, {"value": "410", "label": "\u94c1\u5cad"}, {"value": "411", "label": "\u5927\u8fde"}, {"value": "412", "label": "\u978d\u5c71"}, {"value": "413", "label": "\u629a\u987a"}, {"value": "414", "label": "\u672c\u6eaa"}, {"value": "415", "label": "\u4e39\u4e1c"}, {"value": "416", "label": "\u9526\u5dde"}, {"value": "417", "label": "\u8425\u53e3"}, {"value": "418", "label": "\u961c\u65b0"}, {"value": "419", "label": "\u8fbd\u9633"}, {"value": "421", "label": "\u671d\u9633"}, {"value": "427", "label": "\u76d8\u9526"}, {"value": "429", "label": "\u9526\u897f"}], "value": "609905", "label": "\u8fbd\u5b81"}, {"children": [{"value": "025", "label": "\u5357\u4eac"}, {"value": "510", "label": "\u65e0\u9521"}, {"value": "511", "label": "\u9547\u6c5f"}, {"value": "512", "label": "\u82cf\u5dde"}, {"value": "513", "label": "\u5357\u901a"}, {"value": "514", "label": "\u626c\u5dde"}, {"value": "515", "label": "\u76d0\u57ce"}, {"value": "516", "label": "\u5f90\u5dde"}, {"value": "517", "label": "\u6dee\u9634"}, {"value": "518", "label": "\u8fde\u4e91\u6e2f"}, {"value": "519", "label": "\u5e38\u5dde"}, {"value": "523", "label": "\u6cf0\u5dde"}, {"value": "527", "label": "\u5bbf\u8fc1"}], "value": "600103", "label": "\u6c5f\u82cf"}, {"children": [{"value": "027", "label": "\u6b66\u6c49"}, {"value": "710", "label": "\u8944\u6a0a"}, {"value": "711", "label": "\u9102\u5dde"}, {"value": "712", "label": "\u5b5d\u611f"}, {"value": "713", "label": "\u9ec4\u5188"}, {"value": "714", "label": "\u9ec4\u77f3"}, {"value": "715", "label": "\u54b8\u5b81"}, {"value": "716", "label": "\u8346\u6c99"}, {"value": "717", "label": "\u5b9c\u660c"}, {"value": "718", "label": "\u6069\u65bd"}, {"value": "719", "label": "\u5341\u5830"}, {"value": "722", "label": "\u968f\u5dde"}, {"value": "724", "label": "\u8346\u95e8"}, {"value": "728", "label": "\u6c5f\u6c49"}], "value": "600202", "label": "\u6e56\u5317"}, {"children": [{"value": "028", "label": "\u6210\u90fd"}, {"value": "810", "label": "\u6daa\u9675"}, {"value": "812", "label": "\u6500\u679d\u82b1"}, {"value": "813", "label": "\u81ea\u8d21"}, {"value": "816", "label": "\u7ef5\u9633"}, {"value": "817", "label": "\u5357\u5145"}, {"value": "818", "label": "\u8fbe\u5ddd"}, {"value": "819", "label": "\u4e07\u53bf"}, {"value": "825", "label": "\u9042\u5b81"}, {"value": "826", "label": "\u5e7f\u5b89"}, {"value": "827", "label": "\u5df4\u4e2d"}, {"value": "830", "label": "\u6cf8\u5dde"}, {"value": "831", "label": "\u5b9c\u5bbe"}, {"value": "832", "label": "\u5185\u6c5f"}, {"value": "833", "label": "\u4e50\u5c71"}, {"value": "834", "label": "\u897f\u660c"}, {"value": "835", "label": "\u96c5\u5b89"}, {"value": "836", "label": "\u5eb7\u5b9a"}, {"value": "837", "label": "\u9a6c\u5c14\u5eb7"}, {"value": "838", "label": "\u5fb7\u9633"}, {"value": "839", "label": "\u5e7f\u5143"}], "value": "600201", "label": "\u56db\u5ddd"}, {"children": [{"value": "029", "label": "\u897f\u5b89"}, {"value": "910", "label": "\u54b8\u9633"}, {"value": "911", "label": "\u5ef6\u5b89"}, {"value": "912", "label": "\u6986\u6797"}, {"value": "913", "label": "\u6e2d\u5357"}, {"value": "914", "label": "\u5546\u5dde"}, {"value": "915", "label": "\u5b89\u5eb7"}, {"value": "916", "label": "\u6c49\u4e2d"}, {"value": "917", "label": "\u5b9d\u9e21"}, {"value": "919", "label": "\u94dc\u5ddd"}], "value": "600204", "label": "\u9655\u897f"}, {"children": [{"value": "310", "label": "\u90af\u90f8"}, {"value": "311", "label": "\u77f3\u5bb6\u5e84"}, {"value": "312", "label": "\u4fdd\u5b9a"}, {"value": "313", "label": "\u5f20\u5bb6\u53e3"}, {"value": "314", "label": "\u627f\u5fb7"}, {"value": "315", "label": "\u5510\u5c71"}, {"value": "316", "label": "\u5eca\u574a"}, {"value": "317", "label": "\u6ca7\u5dde"}, {"value": "318", "label": "\u8861\u6c34"}, {"value": "319", "label": "\u90a2\u53f0"}, {"value": "335", "label": "\u79e6\u7687\u5c9b"}], "value": "609906", "label": "\u6cb3\u5317"}, {"children": [{"value": "349", "label": "\u6714\u5dde"}, {"value": "350", "label": "\u5ffb\u5dde"}, {"value": "351", "label": "\u592a\u539f"}, {"value": "352", "label": "\u5927\u540c"}, {"value": "353", "label": "\u9633\u6cc9"}, {"value": "354", "label": "\u6986\u6b21"}, {"value": "355", "label": "\u957f\u6cbb"}, {"value": "356", "label": "\u664b\u57ce"}, {"value": "357", "label": "\u4e34\u6c7e"}, {"value": "358", "label": "\u79bb\u77f3"}, {"value": "359", "label": "\u8fd0\u57ce"}], "value": "609907", "label": "\u5c71\u897f"}, {"children": [{"value": "370", "label": "\u5546\u4e18"}, {"value": "371", "label": "\u90d1\u5dde"}, {"value": "372", "label": "\u5b89\u9633"}, {"value": "373", "label": "\u65b0\u4e61"}, {"value": "374", "label": "\u8bb8\u660c"}, {"value": "375", "label": "\u5e73\u9876\u5c71"}, {"value": "376", "label": "\u4fe1\u9633"}, {"value": "377", "label": "\u5357\u9633"}, {"value": "378", "label": "\u5f00\u5c01"}, {"value": "379", "label": "\u6d1b\u9633"}, {"value": "391", "label": "\u7126\u4f5c"}, {"value": "392", "label": "\u9e64\u58c1"}, {"value": "393", "label": "\u6fee\u9633"}, {"value": "394", "label": "\u5468\u53e3"}, {"value": "395", "label": "\u6f2f\u6cb3"}, {"value": "396", "label": "\u9a7b\u9a6c\u5e97"}, {"value": "397", "label": "\u6f62\u5ddd"}, {"value": "398", "label": "\u4e09\u95e8\u5ce1"}], "value": "609904", "label": "\u6cb3\u5357"}, {"children": [{"value": "431", "label": "\u957f\u6625"}, {"value": "432", "label": "\u5409\u6797"}, {"value": "433", "label": "\u5ef6\u5409"}, {"value": "434", "label": "\u56db\u5e73"}, {"value": "435", "label": "\u901a\u5316"}, {"value": "436", "label": "\u767d\u57ce"}, {"value": "437", "label": "\u8fbd\u6e90"}, {"value": "438", "label": "\u677e\u539f"}, {"value": "439", "label": "\u767d\u5c71"}, {"value": "440", "label": "\u73f2\u6625"}, {"value": "448", "label": "\u6885\u6cb3\u53e3"}], "value": "609909", "label": "\u5409\u6797"}, {"children": [{"value": "451", "label": "\u54c8\u5c14\u6ee8"}, {"value": "452", "label": "\u9f50\u9f50\u54c8\u5c14"}, {"value": "453", "label": "\u7261\u4e39\u6c5f"}, {"value": "454", "label": "\u4f73\u6728\u65af"}, {"value": "455", "label": "\u7ee5\u5316"}, {"value": "456", "label": "\u9ed1\u6cb3"}, {"value": "457", "label": "\u52a0\u683c\u8fbe\u5947"}, {"value": "458", "label": "\u4f0a\u6625"}, {"value": "459", "label": "\u5927\u5e86"}, {"value": "464", "label": "\u4e03\u53f0\u6cb3"}, {"value": "467", "label": "\u9e21\u897f"}, {"value": "468", "label": "\u9e64\u5c97"}, {"value": "469", "label": "\u53cc\u9e26\u5c71"}], "value": "609910", "label": "\u9ed1\u9f99\u6c5f"}, {"children": [{"value": "470", "label": "\u6d77\u62c9\u5c14"}, {"value": "471", "label": "\u547c\u548c\u6d69\u7279"}, {"value": "472", "label": "\u5305\u5934"}, {"value": "473", "label": "\u4e4c\u6d77"}, {"value": "474", "label": "\u96c6\u5b81"}, {"value": "475", "label": "\u901a\u8fbd"}, {"value": "476", "label": "\u8d64\u5cf0"}, {"value": "477", "label": "\u4e1c\u80dc"}, {"value": "478", "label": "\u4e34\u6cb3"}, {"value": "479", "label": "\u9521\u6797\u6d69\u7279"}, {"value": "482", "label": "\u4e4c\u5170\u6d69\u7279"}, {"value": "483", "label": "\u963f\u62c9\u5584\u5de6"}], "value": "609908", "label": "\u5185\u8499\u53e4"}, {"children": [{"value": "530", "label": "\u8377\u6cfd"}, {"value": "531", "label": "\u6d4e\u5357"}, {"value": "532", "label": "\u9752\u5c9b"}, {"value": "533", "label": "\u6dc4\u535a"}, {"value": "534", "label": "\u5fb7\u5dde"}, {"value": "535", "label": "\u70df\u53f0"}, {"value": "536", "label": "\u6f4d\u574a"}, {"value": "537", "label": "\u6d4e\u5b81"}, {"value": "538", "label": "\u6cf0\u5b89"}, {"value": "539", "label": "\u4e34\u6c82"}, {"value": "543", "label": "\u6ee8\u5dde"}, {"value": "546", "label": "\u4e1c\u8425"}, {"value": "631", "label": "\u5a01\u6d77"}, {"value": "632", "label": "\u67a3\u5e84"}, {"value": "633", "label": "\u65e5\u7167"}, {"value": "634", "label": "\u83b1\u829c"}, {"value": "635", "label": "\u804a\u57ce"}], "value": "609903", "label": "\u5c71\u4e1c"}, {"children": [{"value": "550", "label": "\u6ec1\u5dde"}, {"value": "551", "label": "\u5408\u80a5"}, {"value": "552", "label": "\u868c\u57e0"}, {"value": "553", "label": "\u829c\u6e56"}, {"value": "554", "label": "\u6dee\u5357"}, {"value": "555", "label": "\u9a6c\u978d\u5c71"}, {"value": "556", "label": "\u5b89\u5e86"}, {"value": "557", "label": "\u5bbf\u5dde"}, {"value": "558", "label": "\u961c\u9633"}, {"value": "559", "label": "\u9ec4\u5c71"}, {"value": "561", "label": "\u6dee\u5317"}, {"value": "562", "label": "\u94dc\u9675"}, {"value": "563", "label": "\u5ba3\u57ce"}, {"value": "564", "label": "\u516d\u5b89"}, {"value": "565", "label": "\u5de2\u6e56"}, {"value": "566", "label": "\u8d35\u6c60"}], "value": "600301", "label": "\u5b89\u5fbd"}, {"children": [{"value": "570", "label": "\u8862\u5dde"}, {"value": "571", "label": "\u676d\u5dde"}, {"value": "572", "label": "\u6e56\u5dde"}, {"value": "573", "label": "\u5609\u5174"}, {"value": "574", "label": "\u5b81\u6ce2"}, {"value": "575", "label": "\u7ecd\u5174"}, {"value": "576", "label": "\u53f0\u5dde"}, {"value": "577", "label": "\u6e29\u5dde"}, {"value": "578", "label": "\u4e3d\u6c34"}, {"value": "579", "label": "\u91d1\u534e"}, {"value": "580", "label": "\u821f\u5c71"}], "value": "600104", "label": "\u6d59\u6c5f"}, {"children": [{"value": "591", "label": "\u798f\u5dde"}, {"value": "592", "label": "\u53a6\u95e8"}, {"value": "593", "label": "\u5b81\u5fb7"}, {"value": "594", "label": "\u8386\u7530"}, {"value": "595", "label": "\u6cc9\u5dde"}, {"value": "596", "label": "\u6f33\u5dde"}, {"value": "597", "label": "\u9f99\u5ca9"}, {"value": "598", "label": "\u4e09\u660e"}, {"value": "599", "label": "\u5357\u5e73"}], "value": "600105", "label": "\u798f\u5efa"}, {"children": [{"value": "730", "label": "\u5cb3\u9633"}, {"value": "731", "label": "\u957f\u6c99"}, {"value": "732", "label": "\u6e58\u6f6d"}, {"value": "733", "label": "\u682a\u5dde"}, {"value": "734", "label": "\u8861\u9633"}, {"value": "735", "label": "\u90f4\u5dde"}, {"value": "736", "label": "\u5e38\u5fb7"}, {"value": "737", "label": "\u76ca\u9633"}, {"value": "738", "label": "\u5a04\u5e95"}, {"value": "739", "label": "\u90b5\u9633"}, {"value": "743", "label": "\u5409\u9996"}, {"value": "744", "label": "\u5f20\u5bb6\u754c"}, {"value": "745", "label": "\u6000\u5316"}, {"value": "746", "label": "\u51b7\u6c34\u6ee9"}], "value": "600203", "label": "\u6e56\u5357"}, {"children": [{"value": "770", "label": "\u9632\u57ce\u6e2f"}, {"value": "771", "label": "\u5357\u5b81"}, {"value": "772", "label": "\u67f3\u5dde"}, {"value": "773", "label": "\u6842\u6797"}, {"value": "774", "label": "\u68a7\u5dde"}, {"value": "775", "label": "\u7389\u6797"}, {"value": "776", "label": "\u767e\u8272"}, {"value": "777", "label": "\u94a6\u5dde"}, {"value": "778", "label": "\u6cb3\u6c60"}, {"value": "779", "label": "\u5317\u6d77"}], "value": "600302", "label": "\u5e7f\u897f"}, {"children": [{"value": "701", "label": "\u9e70\u6f6d"}, {"value": "790", "label": "\u65b0\u4f59"}, {"value": "791", "label": "\u5357\u660c"}, {"value": "792", "label": "\u4e5d\u6c5f"}, {"value": "793", "label": "\u4e0a\u9976"}, {"value": "794", "label": "\u629a\u5dde"}, {"value": "795", "label": "\u5b9c\u6625"}, {"value": "796", "label": "\u5409\u5b89"}, {"value": "797", "label": "\u8d63\u5dde"}, {"value": "798", "label": "\u666f\u5fb7\u9547"}, {"value": "799", "label": "\u840d\u4e61"}], "value": "600305", "label": "\u6c5f\u897f"}, {"children": [{"value": "851", "label": "\u8d35\u9633"}, {"value": "852", "label": "\u9075\u4e49"}, {"value": "853", "label": "\u5b89\u987a"}, {"value": "854", "label": "\u90fd\u5300"}, {"value": "855", "label": "\u51ef\u91cc"}, {"value": "856", "label": "\u94dc\u4ec1"}, {"value": "857", "label": "\u6bd5\u8282"}, {"value": "858", "label": "\u516d\u76d8\u6c34"}, {"value": "859", "label": "\u5174\u4e49"}], "value": "600402", "label": "\u8d35\u5dde"}, {"children": [{"value": "691", "label": "\u666f\u6d2a"}, {"value": "692", "label": "\u6f5e\u897f"}, {"value": "870", "label": "\u662d\u901a"}, {"value": "871", "label": "\u6606\u660e"}, {"value": "872", "label": "\u5927\u7406"}, {"value": "873", "label": "\u4e2a\u65e7"}, {"value": "874", "label": "\u66f2\u9756"}, {"value": "875", "label": "\u4fdd\u5c71"}, {"value": "876", "label": "\u6587\u5c71"}, {"value": "877", "label": "\u7389\u6eaa"}, {"value": "878", "label": "\u695a\u96c4"}, {"value": "879", "label": "\u601d\u8305"}, {"value": "881", "label": "\u4e1c\u5ddd"}, {"value": "883", "label": "\u4e34\u6ca7"}, {"value": "886", "label": "\u516d\u5e93"}, {"value": "887", "label": "\u4e2d\u7538"}, {"value": "888", "label": "\u4e3d\u6c5f"}], "value": "600205", "label": "\u4e91\u5357"}, {"children": [{"value": "8029", "label": "\u4ef2\u5df4\u53bf"}, {"value": "8060", "label": "\u666e\u5170\u53bf"}, {"value": "8063", "label": "\u5609\u9ece\u53bf"}, {"value": "8065", "label": "\u8042\u8363\u53bf"}, {"value": "8067", "label": "\u73ed\u6208\u53bf"}, {"value": "8068", "label": "\u7533\u624e\u53bf"}, {"value": "8070", "label": "\u53cc\u6e56 "}, {"value": "8071", "label": "\u624e\u8fbe\u53bf"}, {"value": "8081", "label": "\u5c3c\u739b\u53bf"}, {"value": "891", "label": "\u62c9\u8428"}, {"value": "892", "label": "\u65e5\u5ba2\u5219"}, {"value": "893", "label": "\u5c71\u5357"}, {"value": "894", "label": "\u6797\u829d"}, {"value": "895", "label": "\u660c\u90fd"}, {"value": "896", "label": "\u90a3\u66f2"}, {"value": "897", "label": "\u963f\u91cc"}], "value": "600406", "label": "\u897f\u85cf"}, {"children": [{"value": "890", "label": "\u510b\u53bf"}, {"value": "898", "label": "\u6d77\u53e3"}, {"value": "899", "label": "\u4e09\u4e9a"}], "value": "600403", "label": "\u6d77\u5357"}, {"children": [{"value": "930", "label": "\u4e34\u590f"}, {"value": "931", "label": "\u5170\u5dde"}, {"value": "932", "label": "\u5b9a\u897f"}, {"value": "933", "label": "\u5e73\u51c9"}, {"value": "934", "label": "\u897f\u5cf0"}, {"value": "935", "label": "\u6b66\u5a01"}, {"value": "936", "label": "\u5f20\u6396"}, {"value": "937", "label": "\u9152\u6cc9"}, {"value": "938", "label": "\u5929\u6c34"}, {"value": "939", "label": "\u6b66\u90fd"}, {"value": "941", "label": "\u7518\u5357\u5dde"}, {"value": "943", "label": "\u767d\u94f6"}], "value": "600401", "label": "\u7518\u8083"}, {"children": [{"value": "951", "label": "\u94f6\u5ddd"}, {"value": "952", "label": "\u77f3\u5634\u5c71"}, {"value": "953", "label": "\u5434\u5fe0"}, {"value": "954", "label": "\u56fa\u539f"}, {"value": "955", "label": "\u4e2d\u536b"}], "value": "600404", "label": "\u5b81\u590f"}, {"children": [{"value": "970", "label": "\u6d77\u664f"}, {"value": "971", "label": "\u897f\u5b81"}, {"value": "972", "label": "\u6d77\u4e1c"}, {"value": "973", "label": "\u540c\u4ec1"}, {"value": "974", "label": "\u5171\u548c"}, {"value": "975", "label": "\u739b\u6c81"}, {"value": "976", "label": "\u7389\u6811"}, {"value": "977", "label": "\u5fb7\u4ee4\u54c8"}, {"value": "979", "label": "\u683c\u5c14\u6728"}], "value": "600405", "label": "\u9752\u6d77"}, {"children": [{"value": "901", "label": "\u5854\u57ce"}, {"value": "902", "label": "\u54c8\u5bc6"}, {"value": "903", "label": "\u548c\u7530"}, {"value": "906", "label": "\u963f\u52d2\u6cf0"}, {"value": "908", "label": "\u963f\u56fe\u4ec0"}, {"value": "909", "label": "\u535a\u4e50"}, {"value": "990", "label": "\u514b\u62c9\u739b\u4f9d"}, {"value": "991", "label": "\u4e4c\u9c81\u6728\u9f50"}, {"value": "992", "label": "\u594e\u5c6f"}, {"value": "993", "label": "\u77f3\u6cb3\u5b50"}, {"value": "994", "label": "\u660c\u5409"}, {"value": "995", "label": "\u5410\u9c81\u756a"}, {"value": "996", "label": "\u5e93\u5c14\u52d2"}, {"value": "997", "label": "\u963f\u514b\u82cf"}, {"value": "998", "label": "\u5580\u4ec0"}, {"value": "999", "label": "\u4f0a\u5b81"}], "value": "600303", "label": "\u65b0\u7586"}]

class Show extends React.Component{
  render() {
    return (<div className="row" style={{"padding":"10px"}}>
      <div className="col-4" style={{"textAlign":"right","padding":"5px"}}>
        <h3>{this.props.name}:</h3>
      </div>
      <div className="col-20">
        {this.props.children}
      </div>
    </div>);
  }
}
Show.defaultProps = {
  name :"未命名"
};



let Demo = React.createClass({
  locals:{
    params:{},
  },
  getInitialState: function () {
    return {
      radioValue: 'a',
      table:{
        pageSize:10,
        pageNo:1,
        totalRows:0,
        data: [],
      },
      testdefaultvalue: "1",
      inputnum:1,
    };
  },
  componentDidMount: function(){
    console.log("did mount");
    this.doList(this.state.table.pageNo, this.state.table.pageSize);
  },
  checkboxChange: function(checkedValues) {
    console.log('checked = ', checkedValues);
  },
  radioChange:function(e){
    console.log('radio checked:' + e.target.value);
  },
  doList: function(pageNo, pageSize){ //params用在查询时, 传入其他参数
      var _this = this;
      var params = this.locals.params;
      params["pageNo"] = pageNo;
      params["pageSize"] = pageSize;
      Ajax.post("http://127.0.0.1:9002/api/queryHandingForm",params , function(r){
          var data = r.result;
          for(var i in data){
            data[i]["operate"] = (<span>
              <Button type="primary" onClick={alert.bind(null,"123")}>
                查看详情
              </Button>
            </span>);
          }
          _this.setState({
            table:{
              data:data,
              totalRows:r.totalCount,
              offset: pageNo,
              pageSize: pageSize
            }
          });
      });
  },
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    let tableProps={
      title:['受理单号','客户经理','客户名称','受理单类型','是否试用','状态','总金额','订购类型','订购周期','提交日期','资源开通日期'],
      jsonKey:['requestTicketsNo','CMname','accountName','useType','isTrial','status','totalPrice','cycleType','cycleCnt','requestDate','createDate'],
      data:this.state.table.data,
      doList:this.doList,
      pageSize:this.state.table.pageSize,
      pageNo:this.state.table.pageNo, //page:this.state.offset
      totalRows:this.state.table.totalRows,
      checkType:"none",
    };
    const sel = <Select defaultValue="大于" style={{ width: 70 }} data={{"gt":"大于","st":"小于"}} />;
    const options = [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
          value: 'xihu',
          label: '西湖',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: '江苏',
      children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
          value: 'zhonghuamen',
          label: '中华门',
        }],
      }],
    }];
    let inputList =[], cnt=0;
    while(++cnt < this.state.inputnum) inputList.push(<Input key={cnt} name={`inputList${cnt}`} style={{width:100}} />);
    const columns1 = [
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '年龄', dataIndex: 'age', key: 'age' },
      { title: '列1', dataIndex: 'age', key: '1' },
      { title: '列2', dataIndex: 'age', key: '2' },
      { title: '列3', dataIndex: 'age', key: '3' },
      { title: '列4', dataIndex: 'age', key: '4' },
      { title: '列5', dataIndex: 'age', key: '5' },
      { title: '列6', dataIndex: 'age', key: '6' },
      { title: '列7', dataIndex: 'age', key: '7' },
      { title: '列8', dataIndex: 'age', key: '8' },
      {
        title: '操作',
        key: 'operation',
        render() {
          return <a href="#">操作</a>;
        }
      },
    ];
    const data1 = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
    }];
    return (<div>
    <div className="row">
      <Show name="按钮">
        <Button type="primary">主按钮</Button>
        <Button type="primary" size="large">大号按钮</Button>
        <Button type="primary" disabled>主按钮(失效)</Button>
        <Button type="primary">
          前进
          <Icon type="right" />
        </Button>
      </Show>
      <Show name="图标">
        <Icon type="step-forward" />
        <Icon type="double-right" />
        <Icon type="plus" />
      </Show>
      <Show name="多选框">
        <CheckboxGroup options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} onChange={this.checkboxChange} />
      </Show>
      <Show name="带条件输入">
        <Input id="site4" placeholder="金额" size="large" addonBefore={sel} style={{"width":200}}/>
      </Show>
      <Show name="单选框">
        <RadioGroup onChange={this.radioChange} value={this.state.radioValue}>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
          <Radio value="c">C</Radio>
          <Radio value="d">D</Radio>
        </RadioGroup>
      </Show>
      <Show name="日期选择">
        <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" onChange={value=>{console.log(value); window.testdate = value;}}/>
      </Show>
      <Show name="ant表格">
        <TableRaw dataSource={dataSource} columns={columns} />
      </Show>
      <Show name="表格">
        <Table {...tableProps} />
      </Show>
      <Show name="级联选择">
        <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />
      </Show>
      <Show name="原生Select">
        <select name="raw_select" onChange={(a,b,c)=>{console.log(a,b,c)}}>
          <option value ="volvo">Volvo</option>
          <option value ="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <Select defaultValue="大于" style={{ width: 70 }} data={{"gt":"大于","st":"小于"}} onChange={(a,b,c)=>{console.log(a,b,c)}} />;
      </Show>
      <Show name="简易表单">
        <SimpleForm ref="simpleform" itemSpan={12}>
          <Input name="test-input" labelName="输入1"/>
          <Select name="test-Select" labelName="输入2" data={{"1":"一","2":"二"}} />
        </SimpleForm>
        <Button onClick={()=>{console.log(this.refs.simpleform.getValue());}}>Test</Button>
      </Show>
      <Show name="defaultValue测试">
        <Input defaultValue={this.state.testdefaultvalue} style={{width:100}}/>
        <Button onClick={()=>{this.setState({testdefaultvalue:this.state.testdefaultvalue+1})}}>Test</Button>
      </Show>
      <Show name="动态增减input">
        <SimpleForm ref="simpleform1" itemSpan={24}>
          {inputList}
        </SimpleForm>
        <Button onClick={()=>{this.setState({inputnum:this.state.inputnum+1})}}>加一个</Button>
        <Button onClick={()=>{
          let input = [];
          for(let key in this.refs.simpleform1.getValue())
            if(key.search("inputList")>-1) input.push(this.refs.simpleform1.getValue()[key])
          console.log(input);
        }} type="primary">取值</Button>
      </Show>
      <Show name="表格列翻页">
        <TableRaw columns={columns1} dataSource={data1} columnsPageRange={[2, 9]} columnsPageSize={4} />;
      </Show>
      <Show name="日期时间控件">
        <DatePicker 
          showTime 
          format="yyyy-MM-dd HH:mm:ss" 
          placeholder="请选择时间" 
          onChange={value=>{window.value = value; console.log('选择了时间：', value.toString());alert(JSON.stringify(value))}} />
      </Show>
      <Show name="地区选择控件">
        <Cascader options={province_city_map} onChange={value=>console.log(value)} changeOnSelect/>
      </Show>
      <Show name="Tabs">
		<div className="card-container">
		  <Tabs type="card">
		    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
		    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
		    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
		  </Tabs>
		</div>
      </Show>
    </div>
    </div>);
  }
});

ReactDOM.render(<Demo />, document.getElementById('page-wrapper'));

