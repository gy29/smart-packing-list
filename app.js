const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "zh"];

const API_CONFIG = {
  forecastUrl: "https://api.open-meteo.com/v1/forecast",
  apiKey: "",
};

const ADSENSE_CONFIG = {
  enabled: true,
  publisherId: "1891599821337117",
  slots: {
    resultInline: "",
    sideRail: "",
    sideRailSecond: "",
  },
};

const LOCATION_DATA = [
  {
    code: "US",
    name: { en: "United States", zh: "美国" },
    regions: [
      {
        code: "US-CA",
        name: { en: "California", zh: "加利福尼亚州" },
        cities: [
          { id: "us-los-angeles", name: { en: "Los Angeles", zh: "洛杉矶" }, latitude: 34.0522, longitude: -118.2437, timezone: "America/Los_Angeles", countryCode: "US" },
          { id: "us-san-francisco", name: { en: "San Francisco", zh: "旧金山" }, latitude: 37.7749, longitude: -122.4194, timezone: "America/Los_Angeles", countryCode: "US" },
        ],
      },
      {
        code: "US-NY",
        name: { en: "New York", zh: "纽约州" },
        cities: [
          { id: "us-new-york", name: { en: "New York City", zh: "纽约市" }, latitude: 40.7128, longitude: -74.006, timezone: "America/New_York", countryCode: "US" },
        ],
      },
      {
        code: "US-FL",
        name: { en: "Florida", zh: "佛罗里达州" },
        cities: [
          { id: "us-miami", name: { en: "Miami", zh: "迈阿密" }, latitude: 25.7617, longitude: -80.1918, timezone: "America/New_York", countryCode: "US" },
          { id: "us-orlando", name: { en: "Orlando", zh: "奥兰多" }, latitude: 28.5383, longitude: -81.3792, timezone: "America/New_York", countryCode: "US" },
        ],
      },
      {
        code: "US-IL",
        name: { en: "Illinois", zh: "伊利诺伊州" },
        cities: [
          { id: "us-chicago", name: { en: "Chicago", zh: "芝加哥" }, latitude: 41.8781, longitude: -87.6298, timezone: "America/Chicago", countryCode: "US" },
        ],
      },
      {
        code: "US-WA",
        name: { en: "Washington", zh: "华盛顿州" },
        cities: [
          { id: "us-seattle", name: { en: "Seattle", zh: "西雅图" }, latitude: 47.6062, longitude: -122.3321, timezone: "America/Los_Angeles", countryCode: "US" },
        ],
      },
      {
        code: "US-NV",
        name: { en: "Nevada", zh: "内华达州" },
        cities: [
          { id: "us-las-vegas", name: { en: "Las Vegas", zh: "拉斯维加斯" }, latitude: 36.1699, longitude: -115.1398, timezone: "America/Los_Angeles", countryCode: "US" },
        ],
      },
    ],
  },
  {
    code: "GB",
    name: { en: "United Kingdom", zh: "英国" },
    regions: [
      {
        code: "GB-ENG",
        name: { en: "England", zh: "英格兰" },
        cities: [
          { id: "gb-london", name: { en: "London", zh: "伦敦" }, latitude: 51.5074, longitude: -0.1278, timezone: "Europe/London", countryCode: "GB" },
          { id: "gb-manchester", name: { en: "Manchester", zh: "曼彻斯特" }, latitude: 53.4808, longitude: -2.2426, timezone: "Europe/London", countryCode: "GB" },
        ],
      },
      {
        code: "GB-SCT",
        name: { en: "Scotland", zh: "苏格兰" },
        cities: [
          { id: "gb-edinburgh", name: { en: "Edinburgh", zh: "爱丁堡" }, latitude: 55.9533, longitude: -3.1883, timezone: "Europe/London", countryCode: "GB" },
        ],
      },
      {
        code: "GB-NIR",
        name: { en: "Northern Ireland", zh: "北爱尔兰" },
        cities: [
          { id: "gb-belfast", name: { en: "Belfast", zh: "贝尔法斯特" }, latitude: 54.5973, longitude: -5.9301, timezone: "Europe/London", countryCode: "GB" },
        ],
      },
    ],
  },
  {
    code: "FR",
    name: { en: "France", zh: "法国" },
    regions: [
      {
        code: "FR-IDF",
        name: { en: "Ile-de-France", zh: "法兰西岛" },
        cities: [
          { id: "fr-paris", name: { en: "Paris", zh: "巴黎" }, latitude: 48.8566, longitude: 2.3522, timezone: "Europe/Paris", countryCode: "FR" },
        ],
      },
      {
        code: "FR-PAC",
        name: { en: "Provence-Alpes-Cote d'Azur", zh: "普罗旺斯-阿尔卑斯-蓝色海岸" },
        cities: [
          { id: "fr-nice", name: { en: "Nice", zh: "尼斯" }, latitude: 43.7102, longitude: 7.262, timezone: "Europe/Paris", countryCode: "FR" },
          { id: "fr-marseille", name: { en: "Marseille", zh: "马赛" }, latitude: 43.2965, longitude: 5.3698, timezone: "Europe/Paris", countryCode: "FR" },
        ],
      },
    ],
  },
  {
    code: "DE",
    name: { en: "Germany", zh: "德国" },
    regions: [
      {
        code: "DE-BE",
        name: { en: "Berlin", zh: "柏林州" },
        cities: [
          { id: "de-berlin", name: { en: "Berlin", zh: "柏林" }, latitude: 52.52, longitude: 13.405, timezone: "Europe/Berlin", countryCode: "DE" },
        ],
      },
      {
        code: "DE-BY",
        name: { en: "Bavaria", zh: "巴伐利亚州" },
        cities: [
          { id: "de-munich", name: { en: "Munich", zh: "慕尼黑" }, latitude: 48.1351, longitude: 11.582, timezone: "Europe/Berlin", countryCode: "DE" },
        ],
      },
      {
        code: "DE-HE",
        name: { en: "Hesse", zh: "黑森州" },
        cities: [
          { id: "de-frankfurt", name: { en: "Frankfurt", zh: "法兰克福" }, latitude: 50.1109, longitude: 8.6821, timezone: "Europe/Berlin", countryCode: "DE" },
        ],
      },
    ],
  },
  {
    code: "IT",
    name: { en: "Italy", zh: "意大利" },
    regions: [
      {
        code: "IT-LAZ",
        name: { en: "Lazio", zh: "拉齐奥" },
        cities: [
          { id: "it-rome", name: { en: "Rome", zh: "罗马" }, latitude: 41.9028, longitude: 12.4964, timezone: "Europe/Rome", countryCode: "IT" },
        ],
      },
      {
        code: "IT-LOM",
        name: { en: "Lombardy", zh: "伦巴第" },
        cities: [
          { id: "it-milan", name: { en: "Milan", zh: "米兰" }, latitude: 45.4642, longitude: 9.19, timezone: "Europe/Rome", countryCode: "IT" },
        ],
      },
      {
        code: "IT-VEN",
        name: { en: "Veneto", zh: "威尼托" },
        cities: [
          { id: "it-venice", name: { en: "Venice", zh: "威尼斯" }, latitude: 45.4408, longitude: 12.3155, timezone: "Europe/Rome", countryCode: "IT" },
        ],
      },
    ],
  },
  {
    code: "ES",
    name: { en: "Spain", zh: "西班牙" },
    regions: [
      {
        code: "ES-MD",
        name: { en: "Community of Madrid", zh: "马德里自治区" },
        cities: [
          { id: "es-madrid", name: { en: "Madrid", zh: "马德里" }, latitude: 40.4168, longitude: -3.7038, timezone: "Europe/Madrid", countryCode: "ES" },
        ],
      },
      {
        code: "ES-CT",
        name: { en: "Catalonia", zh: "加泰罗尼亚" },
        cities: [
          { id: "es-barcelona", name: { en: "Barcelona", zh: "巴塞罗那" }, latitude: 41.3874, longitude: 2.1686, timezone: "Europe/Madrid", countryCode: "ES" },
        ],
      },
      {
        code: "ES-AN",
        name: { en: "Andalusia", zh: "安达卢西亚" },
        cities: [
          { id: "es-seville", name: { en: "Seville", zh: "塞维利亚" }, latitude: 37.3891, longitude: -5.9845, timezone: "Europe/Madrid", countryCode: "ES" },
        ],
      },
    ],
  },
  {
    code: "NL",
    name: { en: "Netherlands", zh: "荷兰" },
    regions: [
      {
        code: "NL-NH",
        name: { en: "North Holland", zh: "北荷兰省" },
        cities: [
          { id: "nl-amsterdam", name: { en: "Amsterdam", zh: "阿姆斯特丹" }, latitude: 52.3676, longitude: 4.9041, timezone: "Europe/Amsterdam", countryCode: "NL" },
        ],
      },
    ],
  },
  {
    code: "JP",
    name: { en: "Japan", zh: "日本" },
    regions: [
      {
        code: "JP-13",
        name: { en: "Tokyo", zh: "东京都" },
        cities: [
          { id: "jp-tokyo", name: { en: "Tokyo", zh: "东京" }, latitude: 35.6762, longitude: 139.6503, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
      {
        code: "JP-27",
        name: { en: "Osaka", zh: "大阪府" },
        cities: [
          { id: "jp-osaka", name: { en: "Osaka", zh: "大阪" }, latitude: 34.6937, longitude: 135.5023, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
      {
        code: "JP-26",
        name: { en: "Kyoto", zh: "京都府" },
        cities: [
          { id: "jp-kyoto", name: { en: "Kyoto", zh: "京都" }, latitude: 35.0116, longitude: 135.7681, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
      {
        code: "JP-01",
        name: { en: "Hokkaido", zh: "北海道" },
        cities: [
          { id: "jp-sapporo", name: { en: "Sapporo", zh: "札幌" }, latitude: 43.0618, longitude: 141.3545, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
    ],
  },
  {
    code: "KR",
    name: { en: "South Korea", zh: "韩国" },
    regions: [
      {
        code: "KR-11",
        name: { en: "Seoul", zh: "首尔" },
        cities: [
          { id: "kr-seoul", name: { en: "Seoul", zh: "首尔" }, latitude: 37.5665, longitude: 126.978, timezone: "Asia/Seoul", countryCode: "KR" },
        ],
      },
      {
        code: "KR-26",
        name: { en: "Busan", zh: "釜山" },
        cities: [
          { id: "kr-busan", name: { en: "Busan", zh: "釜山" }, latitude: 35.1796, longitude: 129.0756, timezone: "Asia/Seoul", countryCode: "KR" },
        ],
      },
    ],
  },
  {
    code: "CN",
    name: { en: "China", zh: "中国" },
    regions: [
      {
        code: "CN-BJ",
        name: { en: "Beijing", zh: "北京" },
        cities: [
          { id: "cn-beijing", name: { en: "Beijing", zh: "北京" }, latitude: 39.9042, longitude: 116.4074, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-SH",
        name: { en: "Shanghai", zh: "上海" },
        cities: [
          { id: "cn-shanghai", name: { en: "Shanghai", zh: "上海" }, latitude: 31.2304, longitude: 121.4737, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-GD",
        name: { en: "Guangdong", zh: "广东" },
        cities: [
          { id: "cn-guangzhou", name: { en: "Guangzhou", zh: "广州" }, latitude: 23.1291, longitude: 113.2644, timezone: "Asia/Shanghai", countryCode: "CN" },
          { id: "cn-shenzhen", name: { en: "Shenzhen", zh: "深圳" }, latitude: 22.5431, longitude: 114.0579, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-HK",
        name: { en: "Hong Kong", zh: "香港" },
        cities: [
          { id: "cn-hong-kong", name: { en: "Hong Kong", zh: "香港" }, latitude: 22.3193, longitude: 114.1694, timezone: "Asia/Hong_Kong", countryCode: "HK" },
        ],
      },
    ],
  },
  {
    code: "SG",
    name: { en: "Singapore", zh: "新加坡" },
    regions: [
      {
        code: "SG-01",
        name: { en: "Central Region", zh: "中区" },
        cities: [
          { id: "sg-singapore", name: { en: "Singapore", zh: "新加坡" }, latitude: 1.3521, longitude: 103.8198, timezone: "Asia/Singapore", countryCode: "SG" },
        ],
      },
    ],
  },
  {
    code: "TH",
    name: { en: "Thailand", zh: "泰国" },
    regions: [
      {
        code: "TH-10",
        name: { en: "Bangkok", zh: "曼谷" },
        cities: [
          { id: "th-bangkok", name: { en: "Bangkok", zh: "曼谷" }, latitude: 13.7563, longitude: 100.5018, timezone: "Asia/Bangkok", countryCode: "TH" },
        ],
      },
      {
        code: "TH-83",
        name: { en: "Phuket", zh: "普吉府" },
        cities: [
          { id: "th-phuket", name: { en: "Phuket", zh: "普吉" }, latitude: 7.8804, longitude: 98.3923, timezone: "Asia/Bangkok", countryCode: "TH" },
        ],
      },
    ],
  },
  {
    code: "AE",
    name: { en: "United Arab Emirates", zh: "阿联酋" },
    regions: [
      {
        code: "AE-DU",
        name: { en: "Dubai", zh: "迪拜" },
        cities: [
          { id: "ae-dubai", name: { en: "Dubai", zh: "迪拜" }, latitude: 25.2048, longitude: 55.2708, timezone: "Asia/Dubai", countryCode: "AE" },
        ],
      },
      {
        code: "AE-AZ",
        name: { en: "Abu Dhabi", zh: "阿布扎比" },
        cities: [
          { id: "ae-abu-dhabi", name: { en: "Abu Dhabi", zh: "阿布扎比" }, latitude: 24.4539, longitude: 54.3773, timezone: "Asia/Dubai", countryCode: "AE" },
        ],
      },
    ],
  },
  {
    code: "AU",
    name: { en: "Australia", zh: "澳大利亚" },
    regions: [
      {
        code: "AU-NSW",
        name: { en: "New South Wales", zh: "新南威尔士州" },
        cities: [
          { id: "au-sydney", name: { en: "Sydney", zh: "悉尼" }, latitude: -33.8688, longitude: 151.2093, timezone: "Australia/Sydney", countryCode: "AU" },
        ],
      },
      {
        code: "AU-VIC",
        name: { en: "Victoria", zh: "维多利亚州" },
        cities: [
          { id: "au-melbourne", name: { en: "Melbourne", zh: "墨尔本" }, latitude: -37.8136, longitude: 144.9631, timezone: "Australia/Melbourne", countryCode: "AU" },
        ],
      },
      {
        code: "AU-QLD",
        name: { en: "Queensland", zh: "昆士兰州" },
        cities: [
          { id: "au-brisbane", name: { en: "Brisbane", zh: "布里斯班" }, latitude: -27.4698, longitude: 153.0251, timezone: "Australia/Brisbane", countryCode: "AU" },
          { id: "au-cairns", name: { en: "Cairns", zh: "凯恩斯" }, latitude: -16.9186, longitude: 145.7781, timezone: "Australia/Brisbane", countryCode: "AU" },
        ],
      },
    ],
  },
  {
    code: "CA",
    name: { en: "Canada", zh: "加拿大" },
    regions: [
      {
        code: "CA-ON",
        name: { en: "Ontario", zh: "安大略省" },
        cities: [
          { id: "ca-toronto", name: { en: "Toronto", zh: "多伦多" }, latitude: 43.6532, longitude: -79.3832, timezone: "America/Toronto", countryCode: "CA" },
          { id: "ca-ottawa", name: { en: "Ottawa", zh: "渥太华" }, latitude: 45.4215, longitude: -75.6972, timezone: "America/Toronto", countryCode: "CA" },
        ],
      },
      {
        code: "CA-BC",
        name: { en: "British Columbia", zh: "不列颠哥伦比亚省" },
        cities: [
          { id: "ca-vancouver", name: { en: "Vancouver", zh: "温哥华" }, latitude: 49.2827, longitude: -123.1207, timezone: "America/Vancouver", countryCode: "CA" },
        ],
      },
      {
        code: "CA-QC",
        name: { en: "Quebec", zh: "魁北克省" },
        cities: [
          { id: "ca-montreal", name: { en: "Montreal", zh: "蒙特利尔" }, latitude: 45.5017, longitude: -73.5673, timezone: "America/Toronto", countryCode: "CA" },
        ],
      },
    ],
  },
];

const EXTRA_LOCATION_DATA = [
  {
    code: "MX",
    name: { en: "Mexico", zh: "墨西哥" },
    regions: [
      {
        code: "MX-CMX",
        name: { en: "Mexico City", zh: "墨西哥城" },
        cities: [
          { id: "mx-mexico-city", name: { en: "Mexico City", zh: "墨西哥城" }, latitude: 19.4326, longitude: -99.1332, timezone: "America/Mexico_City", countryCode: "MX" },
        ],
      },
      {
        code: "MX-ROO",
        name: { en: "Quintana Roo", zh: "金塔纳罗奥州" },
        cities: [
          { id: "mx-cancun", name: { en: "Cancun", zh: "坎昆" }, latitude: 21.1619, longitude: -86.8515, timezone: "America/Cancun", countryCode: "MX" },
          { id: "mx-playa-del-carmen", name: { en: "Playa del Carmen", zh: "卡门海滩" }, latitude: 20.6296, longitude: -87.0739, timezone: "America/Cancun", countryCode: "MX" },
        ],
      },
      {
        code: "MX-JAL",
        name: { en: "Jalisco", zh: "哈利斯科州" },
        cities: [
          { id: "mx-guadalajara", name: { en: "Guadalajara", zh: "瓜达拉哈拉" }, latitude: 20.6597, longitude: -103.3496, timezone: "America/Mexico_City", countryCode: "MX" },
          { id: "mx-puerto-vallarta", name: { en: "Puerto Vallarta", zh: "巴亚尔塔港" }, latitude: 20.6534, longitude: -105.2253, timezone: "America/Mexico_City", countryCode: "MX" },
        ],
      },
    ],
  },
  {
    code: "BR",
    name: { en: "Brazil", zh: "巴西" },
    regions: [
      {
        code: "BR-RJ",
        name: { en: "Rio de Janeiro", zh: "里约热内卢州" },
        cities: [
          { id: "br-rio-de-janeiro", name: { en: "Rio de Janeiro", zh: "里约热内卢" }, latitude: -22.9068, longitude: -43.1729, timezone: "America/Sao_Paulo", countryCode: "BR" },
        ],
      },
      {
        code: "BR-SP",
        name: { en: "Sao Paulo", zh: "圣保罗州" },
        cities: [
          { id: "br-sao-paulo", name: { en: "Sao Paulo", zh: "圣保罗" }, latitude: -23.5558, longitude: -46.6396, timezone: "America/Sao_Paulo", countryCode: "BR" },
        ],
      },
    ],
  },
  {
    code: "AR",
    name: { en: "Argentina", zh: "阿根廷" },
    regions: [
      {
        code: "AR-C",
        name: { en: "Buenos Aires", zh: "布宜诺斯艾利斯" },
        cities: [
          { id: "ar-buenos-aires", name: { en: "Buenos Aires", zh: "布宜诺斯艾利斯" }, latitude: -34.6037, longitude: -58.3816, timezone: "America/Argentina/Buenos_Aires", countryCode: "AR" },
        ],
      },
      {
        code: "AR-U",
        name: { en: "Tierra del Fuego", zh: "火地岛" },
        cities: [
          { id: "ar-ushuaia", name: { en: "Ushuaia", zh: "乌斯怀亚" }, latitude: -54.8019, longitude: -68.303, timezone: "America/Argentina/Ushuaia", countryCode: "AR" },
        ],
      },
    ],
  },
  {
    code: "CL",
    name: { en: "Chile", zh: "智利" },
    regions: [
      {
        code: "CL-RM",
        name: { en: "Santiago Metropolitan", zh: "圣地亚哥首都大区" },
        cities: [
          { id: "cl-santiago", name: { en: "Santiago", zh: "圣地亚哥" }, latitude: -33.4489, longitude: -70.6693, timezone: "America/Santiago", countryCode: "CL" },
        ],
      },
      {
        code: "CL-VS",
        name: { en: "Valparaiso", zh: "瓦尔帕莱索大区" },
        cities: [
          { id: "cl-valparaiso", name: { en: "Valparaiso", zh: "瓦尔帕莱索" }, latitude: -33.0472, longitude: -71.6127, timezone: "America/Santiago", countryCode: "CL" },
        ],
      },
    ],
  },
  {
    code: "PE",
    name: { en: "Peru", zh: "秘鲁" },
    regions: [
      {
        code: "PE-LIM",
        name: { en: "Lima", zh: "利马" },
        cities: [
          { id: "pe-lima", name: { en: "Lima", zh: "利马" }, latitude: -12.0464, longitude: -77.0428, timezone: "America/Lima", countryCode: "PE" },
        ],
      },
      {
        code: "PE-CUS",
        name: { en: "Cusco", zh: "库斯科" },
        cities: [
          { id: "pe-cusco", name: { en: "Cusco", zh: "库斯科" }, latitude: -13.532, longitude: -71.9675, timezone: "America/Lima", countryCode: "PE" },
        ],
      },
    ],
  },
  {
    code: "PT",
    name: { en: "Portugal", zh: "葡萄牙" },
    regions: [
      {
        code: "PT-11",
        name: { en: "Lisbon", zh: "里斯本" },
        cities: [
          { id: "pt-lisbon", name: { en: "Lisbon", zh: "里斯本" }, latitude: 38.7223, longitude: -9.1393, timezone: "Europe/Lisbon", countryCode: "PT" },
        ],
      },
      {
        code: "PT-13",
        name: { en: "Porto", zh: "波尔图" },
        cities: [
          { id: "pt-porto", name: { en: "Porto", zh: "波尔图" }, latitude: 41.1579, longitude: -8.6291, timezone: "Europe/Lisbon", countryCode: "PT" },
        ],
      },
    ],
  },
  {
    code: "CH",
    name: { en: "Switzerland", zh: "瑞士" },
    regions: [
      {
        code: "CH-ZH",
        name: { en: "Zurich", zh: "苏黎世州" },
        cities: [
          { id: "ch-zurich", name: { en: "Zurich", zh: "苏黎世" }, latitude: 47.3769, longitude: 8.5417, timezone: "Europe/Zurich", countryCode: "CH" },
        ],
      },
      {
        code: "CH-GE",
        name: { en: "Geneva", zh: "日内瓦州" },
        cities: [
          { id: "ch-geneva", name: { en: "Geneva", zh: "日内瓦" }, latitude: 46.2044, longitude: 6.1432, timezone: "Europe/Zurich", countryCode: "CH" },
        ],
      },
      {
        code: "CH-BE",
        name: { en: "Bern", zh: "伯尔尼州" },
        cities: [
          { id: "ch-interlaken", name: { en: "Interlaken", zh: "因特拉肯" }, latitude: 46.6863, longitude: 7.8632, timezone: "Europe/Zurich", countryCode: "CH" },
        ],
      },
    ],
  },
  {
    code: "AT",
    name: { en: "Austria", zh: "奥地利" },
    regions: [
      {
        code: "AT-9",
        name: { en: "Vienna", zh: "维也纳" },
        cities: [
          { id: "at-vienna", name: { en: "Vienna", zh: "维也纳" }, latitude: 48.2082, longitude: 16.3738, timezone: "Europe/Vienna", countryCode: "AT" },
        ],
      },
      {
        code: "AT-5",
        name: { en: "Salzburg", zh: "萨尔茨堡" },
        cities: [
          { id: "at-salzburg", name: { en: "Salzburg", zh: "萨尔茨堡" }, latitude: 47.8095, longitude: 13.055, timezone: "Europe/Vienna", countryCode: "AT" },
        ],
      },
    ],
  },
  {
    code: "CZ",
    name: { en: "Czech Republic", zh: "捷克" },
    regions: [
      {
        code: "CZ-10",
        name: { en: "Prague", zh: "布拉格" },
        cities: [
          { id: "cz-prague", name: { en: "Prague", zh: "布拉格" }, latitude: 50.0755, longitude: 14.4378, timezone: "Europe/Prague", countryCode: "CZ" },
        ],
      },
    ],
  },
  {
    code: "GR",
    name: { en: "Greece", zh: "希腊" },
    regions: [
      {
        code: "GR-I",
        name: { en: "Attica", zh: "阿提卡" },
        cities: [
          { id: "gr-athens", name: { en: "Athens", zh: "雅典" }, latitude: 37.9838, longitude: 23.7275, timezone: "Europe/Athens", countryCode: "GR" },
        ],
      },
      {
        code: "GR-L",
        name: { en: "South Aegean", zh: "南爱琴大区" },
        cities: [
          { id: "gr-santorini", name: { en: "Santorini", zh: "圣托里尼" }, latitude: 36.3932, longitude: 25.4615, timezone: "Europe/Athens", countryCode: "GR" },
          { id: "gr-mykonos", name: { en: "Mykonos", zh: "米科诺斯" }, latitude: 37.4467, longitude: 25.3289, timezone: "Europe/Athens", countryCode: "GR" },
        ],
      },
    ],
  },
  {
    code: "TR",
    name: { en: "Turkey", zh: "土耳其" },
    regions: [
      {
        code: "TR-34",
        name: { en: "Istanbul", zh: "伊斯坦布尔" },
        cities: [
          { id: "tr-istanbul", name: { en: "Istanbul", zh: "伊斯坦布尔" }, latitude: 41.0082, longitude: 28.9784, timezone: "Europe/Istanbul", countryCode: "TR" },
        ],
      },
      {
        code: "TR-07",
        name: { en: "Antalya", zh: "安塔利亚" },
        cities: [
          { id: "tr-antalya", name: { en: "Antalya", zh: "安塔利亚" }, latitude: 36.8969, longitude: 30.7133, timezone: "Europe/Istanbul", countryCode: "TR" },
        ],
      },
      {
        code: "TR-50",
        name: { en: "Cappadocia", zh: "卡帕多奇亚" },
        cities: [
          { id: "tr-goreme", name: { en: "Goreme", zh: "格雷梅" }, latitude: 38.6431, longitude: 34.8289, timezone: "Europe/Istanbul", countryCode: "TR" },
        ],
      },
    ],
  },
  {
    code: "IE",
    name: { en: "Ireland", zh: "爱尔兰" },
    regions: [
      {
        code: "IE-L",
        name: { en: "Leinster", zh: "伦斯特" },
        cities: [
          { id: "ie-dublin", name: { en: "Dublin", zh: "都柏林" }, latitude: 53.3498, longitude: -6.2603, timezone: "Europe/Dublin", countryCode: "IE" },
        ],
      },
      {
        code: "IE-M",
        name: { en: "Munster", zh: "芒斯特" },
        cities: [
          { id: "ie-cork", name: { en: "Cork", zh: "科克" }, latitude: 51.8985, longitude: -8.4756, timezone: "Europe/Dublin", countryCode: "IE" },
        ],
      },
    ],
  },
  {
    code: "BE",
    name: { en: "Belgium", zh: "比利时" },
    regions: [
      {
        code: "BE-BRU",
        name: { en: "Brussels", zh: "布鲁塞尔" },
        cities: [
          { id: "be-brussels", name: { en: "Brussels", zh: "布鲁塞尔" }, latitude: 50.8503, longitude: 4.3517, timezone: "Europe/Brussels", countryCode: "BE" },
        ],
      },
      {
        code: "BE-VLG",
        name: { en: "Flanders", zh: "弗拉芒大区" },
        cities: [
          { id: "be-bruges", name: { en: "Bruges", zh: "布鲁日" }, latitude: 51.2093, longitude: 3.2247, timezone: "Europe/Brussels", countryCode: "BE" },
        ],
      },
    ],
  },
  {
    code: "DK",
    name: { en: "Denmark", zh: "丹麦" },
    regions: [
      {
        code: "DK-84",
        name: { en: "Capital Region", zh: "首都大区" },
        cities: [
          { id: "dk-copenhagen", name: { en: "Copenhagen", zh: "哥本哈根" }, latitude: 55.6761, longitude: 12.5683, timezone: "Europe/Copenhagen", countryCode: "DK" },
        ],
      },
    ],
  },
  {
    code: "SE",
    name: { en: "Sweden", zh: "瑞典" },
    regions: [
      {
        code: "SE-AB",
        name: { en: "Stockholm County", zh: "斯德哥尔摩省" },
        cities: [
          { id: "se-stockholm", name: { en: "Stockholm", zh: "斯德哥尔摩" }, latitude: 59.3293, longitude: 18.0686, timezone: "Europe/Stockholm", countryCode: "SE" },
        ],
      },
      {
        code: "SE-O",
        name: { en: "Vastra Gotaland", zh: "西约塔兰省" },
        cities: [
          { id: "se-gothenburg", name: { en: "Gothenburg", zh: "哥德堡" }, latitude: 57.7089, longitude: 11.9746, timezone: "Europe/Stockholm", countryCode: "SE" },
        ],
      },
    ],
  },
  {
    code: "NO",
    name: { en: "Norway", zh: "挪威" },
    regions: [
      {
        code: "NO-03",
        name: { en: "Oslo", zh: "奥斯陆" },
        cities: [
          { id: "no-oslo", name: { en: "Oslo", zh: "奥斯陆" }, latitude: 59.9139, longitude: 10.7522, timezone: "Europe/Oslo", countryCode: "NO" },
        ],
      },
      {
        code: "NO-46",
        name: { en: "Vestland", zh: "韦斯特兰郡" },
        cities: [
          { id: "no-bergen", name: { en: "Bergen", zh: "卑尔根" }, latitude: 60.3913, longitude: 5.3221, timezone: "Europe/Oslo", countryCode: "NO" },
        ],
      },
    ],
  },
  {
    code: "FI",
    name: { en: "Finland", zh: "芬兰" },
    regions: [
      {
        code: "FI-18",
        name: { en: "Uusimaa", zh: "新地区" },
        cities: [
          { id: "fi-helsinki", name: { en: "Helsinki", zh: "赫尔辛基" }, latitude: 60.1699, longitude: 24.9384, timezone: "Europe/Helsinki", countryCode: "FI" },
        ],
      },
      {
        code: "FI-10",
        name: { en: "Lapland", zh: "拉普兰" },
        cities: [
          { id: "fi-rovaniemi", name: { en: "Rovaniemi", zh: "罗瓦涅米" }, latitude: 66.5039, longitude: 25.7294, timezone: "Europe/Helsinki", countryCode: "FI" },
        ],
      },
    ],
  },
  {
    code: "PL",
    name: { en: "Poland", zh: "波兰" },
    regions: [
      {
        code: "PL-14",
        name: { en: "Masovian", zh: "马佐夫舍省" },
        cities: [
          { id: "pl-warsaw", name: { en: "Warsaw", zh: "华沙" }, latitude: 52.2297, longitude: 21.0122, timezone: "Europe/Warsaw", countryCode: "PL" },
        ],
      },
      {
        code: "PL-12",
        name: { en: "Lesser Poland", zh: "小波兰省" },
        cities: [
          { id: "pl-krakow", name: { en: "Krakow", zh: "克拉科夫" }, latitude: 50.0647, longitude: 19.945, timezone: "Europe/Warsaw", countryCode: "PL" },
        ],
      },
    ],
  },
  {
    code: "HU",
    name: { en: "Hungary", zh: "匈牙利" },
    regions: [
      {
        code: "HU-BU",
        name: { en: "Budapest", zh: "布达佩斯" },
        cities: [
          { id: "hu-budapest", name: { en: "Budapest", zh: "布达佩斯" }, latitude: 47.4979, longitude: 19.0402, timezone: "Europe/Budapest", countryCode: "HU" },
        ],
      },
    ],
  },
  {
    code: "HR",
    name: { en: "Croatia", zh: "克罗地亚" },
    regions: [
      {
        code: "HR-21",
        name: { en: "Zagreb", zh: "萨格勒布" },
        cities: [
          { id: "hr-zagreb", name: { en: "Zagreb", zh: "萨格勒布" }, latitude: 45.815, longitude: 15.9819, timezone: "Europe/Zagreb", countryCode: "HR" },
        ],
      },
      {
        code: "HR-17",
        name: { en: "Split-Dalmatia", zh: "斯普利特-达尔马提亚" },
        cities: [
          { id: "hr-split", name: { en: "Split", zh: "斯普利特" }, latitude: 43.5081, longitude: 16.4402, timezone: "Europe/Zagreb", countryCode: "HR" },
        ],
      },
      {
        code: "HR-19",
        name: { en: "Dubrovnik-Neretva", zh: "杜布罗夫尼克-内雷特瓦" },
        cities: [
          { id: "hr-dubrovnik", name: { en: "Dubrovnik", zh: "杜布罗夫尼克" }, latitude: 42.6507, longitude: 18.0944, timezone: "Europe/Zagreb", countryCode: "HR" },
        ],
      },
    ],
  },
  {
    code: "IS",
    name: { en: "Iceland", zh: "冰岛" },
    regions: [
      {
        code: "IS-1",
        name: { en: "Capital Region", zh: "首都区" },
        cities: [
          { id: "is-reykjavik", name: { en: "Reykjavik", zh: "雷克雅未克" }, latitude: 64.1466, longitude: -21.9426, timezone: "Atlantic/Reykjavik", countryCode: "IS" },
        ],
      },
    ],
  },
  {
    code: "ID",
    name: { en: "Indonesia", zh: "印度尼西亚" },
    regions: [
      {
        code: "ID-JK",
        name: { en: "Jakarta", zh: "雅加达" },
        cities: [
          { id: "id-jakarta", name: { en: "Jakarta", zh: "雅加达" }, latitude: -6.2088, longitude: 106.8456, timezone: "Asia/Jakarta", countryCode: "ID" },
        ],
      },
      {
        code: "ID-BA",
        name: { en: "Bali", zh: "巴厘岛" },
        cities: [
          { id: "id-denpasar", name: { en: "Denpasar", zh: "登巴萨" }, latitude: -8.65, longitude: 115.2167, timezone: "Asia/Makassar", countryCode: "ID" },
          { id: "id-ubud", name: { en: "Ubud", zh: "乌布" }, latitude: -8.5069, longitude: 115.2625, timezone: "Asia/Makassar", countryCode: "ID" },
        ],
      },
    ],
  },
  {
    code: "VN",
    name: { en: "Vietnam", zh: "越南" },
    regions: [
      {
        code: "VN-HN",
        name: { en: "Hanoi", zh: "河内" },
        cities: [
          { id: "vn-hanoi", name: { en: "Hanoi", zh: "河内" }, latitude: 21.0278, longitude: 105.8342, timezone: "Asia/Ho_Chi_Minh", countryCode: "VN" },
        ],
      },
      {
        code: "VN-SG",
        name: { en: "Ho Chi Minh City", zh: "胡志明市" },
        cities: [
          { id: "vn-ho-chi-minh-city", name: { en: "Ho Chi Minh City", zh: "胡志明市" }, latitude: 10.8231, longitude: 106.6297, timezone: "Asia/Ho_Chi_Minh", countryCode: "VN" },
        ],
      },
      {
        code: "VN-DN",
        name: { en: "Da Nang", zh: "岘港" },
        cities: [
          { id: "vn-da-nang", name: { en: "Da Nang", zh: "岘港" }, latitude: 16.0544, longitude: 108.2022, timezone: "Asia/Ho_Chi_Minh", countryCode: "VN" },
        ],
      },
    ],
  },
  {
    code: "MY",
    name: { en: "Malaysia", zh: "马来西亚" },
    regions: [
      {
        code: "MY-14",
        name: { en: "Kuala Lumpur", zh: "吉隆坡" },
        cities: [
          { id: "my-kuala-lumpur", name: { en: "Kuala Lumpur", zh: "吉隆坡" }, latitude: 3.139, longitude: 101.6869, timezone: "Asia/Kuala_Lumpur", countryCode: "MY" },
        ],
      },
      {
        code: "MY-07",
        name: { en: "Penang", zh: "槟城" },
        cities: [
          { id: "my-george-town", name: { en: "George Town", zh: "乔治市" }, latitude: 5.4141, longitude: 100.3288, timezone: "Asia/Kuala_Lumpur", countryCode: "MY" },
        ],
      },
      {
        code: "MY-12",
        name: { en: "Sabah", zh: "沙巴" },
        cities: [
          { id: "my-kota-kinabalu", name: { en: "Kota Kinabalu", zh: "亚庇" }, latitude: 5.9804, longitude: 116.0735, timezone: "Asia/Kuching", countryCode: "MY" },
        ],
      },
    ],
  },
  {
    code: "PH",
    name: { en: "Philippines", zh: "菲律宾" },
    regions: [
      {
        code: "PH-00",
        name: { en: "Metro Manila", zh: "马尼拉大都会" },
        cities: [
          { id: "ph-manila", name: { en: "Manila", zh: "马尼拉" }, latitude: 14.5995, longitude: 120.9842, timezone: "Asia/Manila", countryCode: "PH" },
        ],
      },
      {
        code: "PH-07",
        name: { en: "Central Visayas", zh: "中米沙鄢" },
        cities: [
          { id: "ph-cebu", name: { en: "Cebu", zh: "宿务" }, latitude: 10.3157, longitude: 123.8854, timezone: "Asia/Manila", countryCode: "PH" },
        ],
      },
    ],
  },
  {
    code: "IN",
    name: { en: "India", zh: "印度" },
    regions: [
      {
        code: "IN-DL",
        name: { en: "Delhi", zh: "德里" },
        cities: [
          { id: "in-new-delhi", name: { en: "New Delhi", zh: "新德里" }, latitude: 28.6139, longitude: 77.209, timezone: "Asia/Kolkata", countryCode: "IN" },
        ],
      },
      {
        code: "IN-MH",
        name: { en: "Maharashtra", zh: "马哈拉施特拉邦" },
        cities: [
          { id: "in-mumbai", name: { en: "Mumbai", zh: "孟买" }, latitude: 19.076, longitude: 72.8777, timezone: "Asia/Kolkata", countryCode: "IN" },
        ],
      },
      {
        code: "IN-KA",
        name: { en: "Karnataka", zh: "卡纳塔克邦" },
        cities: [
          { id: "in-bengaluru", name: { en: "Bengaluru", zh: "班加罗尔" }, latitude: 12.9716, longitude: 77.5946, timezone: "Asia/Kolkata", countryCode: "IN" },
        ],
      },
      {
        code: "IN-RJ",
        name: { en: "Rajasthan", zh: "拉贾斯坦邦" },
        cities: [
          { id: "in-jaipur", name: { en: "Jaipur", zh: "斋浦尔" }, latitude: 26.9124, longitude: 75.7873, timezone: "Asia/Kolkata", countryCode: "IN" },
        ],
      },
      {
        code: "IN-GA",
        name: { en: "Goa", zh: "果阿邦" },
        cities: [
          { id: "in-goa", name: { en: "Goa", zh: "果阿" }, latitude: 15.2993, longitude: 74.124, timezone: "Asia/Kolkata", countryCode: "IN" },
        ],
      },
    ],
  },
  {
    code: "TW",
    name: { en: "Taiwan", zh: "中国台湾" },
    regions: [
      {
        code: "TW-TPE",
        name: { en: "Taipei", zh: "台北" },
        cities: [
          { id: "tw-taipei", name: { en: "Taipei", zh: "台北" }, latitude: 25.033, longitude: 121.5654, timezone: "Asia/Taipei", countryCode: "TW" },
        ],
      },
      {
        code: "TW-KHH",
        name: { en: "Kaohsiung", zh: "高雄" },
        cities: [
          { id: "tw-kaohsiung", name: { en: "Kaohsiung", zh: "高雄" }, latitude: 22.6273, longitude: 120.3014, timezone: "Asia/Taipei", countryCode: "TW" },
        ],
      },
    ],
  },
  {
    code: "NZ",
    name: { en: "New Zealand", zh: "新西兰" },
    regions: [
      {
        code: "NZ-AUK",
        name: { en: "Auckland", zh: "奥克兰" },
        cities: [
          { id: "nz-auckland", name: { en: "Auckland", zh: "奥克兰" }, latitude: -36.8509, longitude: 174.7645, timezone: "Pacific/Auckland", countryCode: "NZ" },
        ],
      },
      {
        code: "NZ-WGN",
        name: { en: "Wellington", zh: "惠灵顿" },
        cities: [
          { id: "nz-wellington", name: { en: "Wellington", zh: "惠灵顿" }, latitude: -41.2865, longitude: 174.7762, timezone: "Pacific/Auckland", countryCode: "NZ" },
        ],
      },
      {
        code: "NZ-OTA",
        name: { en: "Otago", zh: "奥塔哥" },
        cities: [
          { id: "nz-queenstown", name: { en: "Queenstown", zh: "皇后镇" }, latitude: -45.0312, longitude: 168.6626, timezone: "Pacific/Auckland", countryCode: "NZ" },
        ],
      },
    ],
  },
  {
    code: "QA",
    name: { en: "Qatar", zh: "卡塔尔" },
    regions: [
      {
        code: "QA-DA",
        name: { en: "Doha", zh: "多哈" },
        cities: [
          { id: "qa-doha", name: { en: "Doha", zh: "多哈" }, latitude: 25.2854, longitude: 51.531, timezone: "Asia/Qatar", countryCode: "QA" },
        ],
      },
    ],
  },
  {
    code: "SA",
    name: { en: "Saudi Arabia", zh: "沙特阿拉伯" },
    regions: [
      {
        code: "SA-01",
        name: { en: "Riyadh", zh: "利雅得" },
        cities: [
          { id: "sa-riyadh", name: { en: "Riyadh", zh: "利雅得" }, latitude: 24.7136, longitude: 46.6753, timezone: "Asia/Riyadh", countryCode: "SA" },
        ],
      },
      {
        code: "SA-02",
        name: { en: "Makkah", zh: "麦加省" },
        cities: [
          { id: "sa-jeddah", name: { en: "Jeddah", zh: "吉达" }, latitude: 21.4858, longitude: 39.1925, timezone: "Asia/Riyadh", countryCode: "SA" },
        ],
      },
    ],
  },
  {
    code: "EG",
    name: { en: "Egypt", zh: "埃及" },
    regions: [
      {
        code: "EG-C",
        name: { en: "Cairo", zh: "开罗" },
        cities: [
          { id: "eg-cairo", name: { en: "Cairo", zh: "开罗" }, latitude: 30.0444, longitude: 31.2357, timezone: "Africa/Cairo", countryCode: "EG" },
        ],
      },
      {
        code: "EG-LX",
        name: { en: "Luxor", zh: "卢克索" },
        cities: [
          { id: "eg-luxor", name: { en: "Luxor", zh: "卢克索" }, latitude: 25.6872, longitude: 32.6396, timezone: "Africa/Cairo", countryCode: "EG" },
        ],
      },
    ],
  },
  {
    code: "MA",
    name: { en: "Morocco", zh: "摩洛哥" },
    regions: [
      {
        code: "MA-CAS",
        name: { en: "Casablanca-Settat", zh: "卡萨布兰卡-塞塔特" },
        cities: [
          { id: "ma-casablanca", name: { en: "Casablanca", zh: "卡萨布兰卡" }, latitude: 33.5731, longitude: -7.5898, timezone: "Africa/Casablanca", countryCode: "MA" },
        ],
      },
      {
        code: "MA-MAR",
        name: { en: "Marrakesh-Safi", zh: "马拉喀什-萨菲" },
        cities: [
          { id: "ma-marrakesh", name: { en: "Marrakesh", zh: "马拉喀什" }, latitude: 31.6295, longitude: -7.9811, timezone: "Africa/Casablanca", countryCode: "MA" },
        ],
      },
    ],
  },
  {
    code: "ZA",
    name: { en: "South Africa", zh: "南非" },
    regions: [
      {
        code: "ZA-WC",
        name: { en: "Western Cape", zh: "西开普省" },
        cities: [
          { id: "za-cape-town", name: { en: "Cape Town", zh: "开普敦" }, latitude: -33.9249, longitude: 18.4241, timezone: "Africa/Johannesburg", countryCode: "ZA" },
        ],
      },
      {
        code: "ZA-GP",
        name: { en: "Gauteng", zh: "豪登省" },
        cities: [
          { id: "za-johannesburg", name: { en: "Johannesburg", zh: "约翰内斯堡" }, latitude: -26.2041, longitude: 28.0473, timezone: "Africa/Johannesburg", countryCode: "ZA" },
        ],
      },
    ],
  },
  {
    code: "KE",
    name: { en: "Kenya", zh: "肯尼亚" },
    regions: [
      {
        code: "KE-30",
        name: { en: "Nairobi", zh: "内罗毕" },
        cities: [
          { id: "ke-nairobi", name: { en: "Nairobi", zh: "内罗毕" }, latitude: -1.2921, longitude: 36.8219, timezone: "Africa/Nairobi", countryCode: "KE" },
        ],
      },
      {
        code: "KE-28",
        name: { en: "Mombasa", zh: "蒙巴萨" },
        cities: [
          { id: "ke-mombasa", name: { en: "Mombasa", zh: "蒙巴萨" }, latitude: -4.0435, longitude: 39.6682, timezone: "Africa/Nairobi", countryCode: "KE" },
        ],
      },
    ],
  },
  {
    code: "MV",
    name: { en: "Maldives", zh: "马尔代夫" },
    regions: [
      {
        code: "MV-MLE",
        name: { en: "Male", zh: "马累" },
        cities: [
          { id: "mv-male", name: { en: "Male", zh: "马累" }, latitude: 4.1755, longitude: 73.5093, timezone: "Indian/Maldives", countryCode: "MV" },
        ],
      },
    ],
  },
  {
    code: "CR",
    name: { en: "Costa Rica", zh: "哥斯达黎加" },
    regions: [
      {
        code: "CR-SJ",
        name: { en: "San Jose", zh: "圣何塞" },
        cities: [
          { id: "cr-san-jose", name: { en: "San Jose", zh: "圣何塞" }, latitude: 9.9281, longitude: -84.0907, timezone: "America/Costa_Rica", countryCode: "CR" },
        ],
      },
    ],
  },
];

const EXTRA_REGIONS = [
  {
    countryCode: "US",
    regions: [
      {
        code: "US-DC",
        name: { en: "District of Columbia", zh: "哥伦比亚特区" },
        cities: [
          { id: "us-washington-dc", name: { en: "Washington, DC", zh: "华盛顿特区" }, latitude: 38.9072, longitude: -77.0369, timezone: "America/New_York", countryCode: "US" },
        ],
      },
      {
        code: "US-MA",
        name: { en: "Massachusetts", zh: "马萨诸塞州" },
        cities: [
          { id: "us-boston", name: { en: "Boston", zh: "波士顿" }, latitude: 42.3601, longitude: -71.0589, timezone: "America/New_York", countryCode: "US" },
        ],
      },
      {
        code: "US-TX",
        name: { en: "Texas", zh: "得克萨斯州" },
        cities: [
          { id: "us-dallas", name: { en: "Dallas", zh: "达拉斯" }, latitude: 32.7767, longitude: -96.797, timezone: "America/Chicago", countryCode: "US" },
          { id: "us-houston", name: { en: "Houston", zh: "休斯敦" }, latitude: 29.7604, longitude: -95.3698, timezone: "America/Chicago", countryCode: "US" },
          { id: "us-austin", name: { en: "Austin", zh: "奥斯汀" }, latitude: 30.2672, longitude: -97.7431, timezone: "America/Chicago", countryCode: "US" },
        ],
      },
      {
        code: "US-CO",
        name: { en: "Colorado", zh: "科罗拉多州" },
        cities: [
          { id: "us-denver", name: { en: "Denver", zh: "丹佛" }, latitude: 39.7392, longitude: -104.9903, timezone: "America/Denver", countryCode: "US" },
        ],
      },
      {
        code: "US-HI",
        name: { en: "Hawaii", zh: "夏威夷州" },
        cities: [
          { id: "us-honolulu", name: { en: "Honolulu", zh: "檀香山" }, latitude: 21.3069, longitude: -157.8583, timezone: "Pacific/Honolulu", countryCode: "US" },
        ],
      },
    ],
  },
  {
    countryCode: "GB",
    regions: [
      {
        code: "GB-WLS",
        name: { en: "Wales", zh: "威尔士" },
        cities: [
          { id: "gb-cardiff", name: { en: "Cardiff", zh: "卡迪夫" }, latitude: 51.4816, longitude: -3.1791, timezone: "Europe/London", countryCode: "GB" },
        ],
      },
    ],
  },
  {
    countryCode: "FR",
    regions: [
      {
        code: "FR-ARA",
        name: { en: "Auvergne-Rhone-Alpes", zh: "奥弗涅-罗讷-阿尔卑斯" },
        cities: [
          { id: "fr-lyon", name: { en: "Lyon", zh: "里昂" }, latitude: 45.764, longitude: 4.8357, timezone: "Europe/Paris", countryCode: "FR" },
        ],
      },
      {
        code: "FR-NAQ",
        name: { en: "Nouvelle-Aquitaine", zh: "新阿基坦" },
        cities: [
          { id: "fr-bordeaux", name: { en: "Bordeaux", zh: "波尔多" }, latitude: 44.8378, longitude: -0.5792, timezone: "Europe/Paris", countryCode: "FR" },
        ],
      },
    ],
  },
  {
    countryCode: "DE",
    regions: [
      {
        code: "DE-HH",
        name: { en: "Hamburg", zh: "汉堡" },
        cities: [
          { id: "de-hamburg", name: { en: "Hamburg", zh: "汉堡" }, latitude: 53.5511, longitude: 9.9937, timezone: "Europe/Berlin", countryCode: "DE" },
        ],
      },
      {
        code: "DE-NW",
        name: { en: "North Rhine-Westphalia", zh: "北莱茵-威斯特法伦州" },
        cities: [
          { id: "de-cologne", name: { en: "Cologne", zh: "科隆" }, latitude: 50.9375, longitude: 6.9603, timezone: "Europe/Berlin", countryCode: "DE" },
        ],
      },
    ],
  },
  {
    countryCode: "IT",
    regions: [
      {
        code: "IT-TOS",
        name: { en: "Tuscany", zh: "托斯卡纳" },
        cities: [
          { id: "it-florence", name: { en: "Florence", zh: "佛罗伦萨" }, latitude: 43.7696, longitude: 11.2558, timezone: "Europe/Rome", countryCode: "IT" },
        ],
      },
      {
        code: "IT-CAM",
        name: { en: "Campania", zh: "坎帕尼亚" },
        cities: [
          { id: "it-naples", name: { en: "Naples", zh: "那不勒斯" }, latitude: 40.8518, longitude: 14.2681, timezone: "Europe/Rome", countryCode: "IT" },
        ],
      },
    ],
  },
  {
    countryCode: "ES",
    regions: [
      {
        code: "ES-VC",
        name: { en: "Valencian Community", zh: "瓦伦西亚自治区" },
        cities: [
          { id: "es-valencia", name: { en: "Valencia", zh: "瓦伦西亚" }, latitude: 39.4699, longitude: -0.3763, timezone: "Europe/Madrid", countryCode: "ES" },
        ],
      },
      {
        code: "ES-IB",
        name: { en: "Balearic Islands", zh: "巴利阿里群岛" },
        cities: [
          { id: "es-palma", name: { en: "Palma", zh: "帕尔马" }, latitude: 39.5696, longitude: 2.6502, timezone: "Europe/Madrid", countryCode: "ES" },
        ],
      },
    ],
  },
  {
    countryCode: "JP",
    regions: [
      {
        code: "JP-40",
        name: { en: "Fukuoka", zh: "福冈县" },
        cities: [
          { id: "jp-fukuoka", name: { en: "Fukuoka", zh: "福冈" }, latitude: 33.5902, longitude: 130.4017, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
      {
        code: "JP-47",
        name: { en: "Okinawa", zh: "冲绳县" },
        cities: [
          { id: "jp-naha", name: { en: "Naha", zh: "那霸" }, latitude: 26.2124, longitude: 127.6792, timezone: "Asia/Tokyo", countryCode: "JP" },
        ],
      },
    ],
  },
  {
    countryCode: "CN",
    regions: [
      {
        code: "CN-ZJ",
        name: { en: "Zhejiang", zh: "浙江" },
        cities: [
          { id: "cn-hangzhou", name: { en: "Hangzhou", zh: "杭州" }, latitude: 30.2741, longitude: 120.1551, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-SC",
        name: { en: "Sichuan", zh: "四川" },
        cities: [
          { id: "cn-chengdu", name: { en: "Chengdu", zh: "成都" }, latitude: 30.5728, longitude: 104.0668, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-YN",
        name: { en: "Yunnan", zh: "云南" },
        cities: [
          { id: "cn-kunming", name: { en: "Kunming", zh: "昆明" }, latitude: 25.0389, longitude: 102.7183, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-FJ",
        name: { en: "Fujian", zh: "福建" },
        cities: [
          { id: "cn-xiamen", name: { en: "Xiamen", zh: "厦门" }, latitude: 24.4798, longitude: 118.0894, timezone: "Asia/Shanghai", countryCode: "CN" },
        ],
      },
      {
        code: "CN-MO",
        name: { en: "Macau", zh: "澳门" },
        cities: [
          { id: "cn-macau", name: { en: "Macau", zh: "澳门" }, latitude: 22.1987, longitude: 113.5439, timezone: "Asia/Macau", countryCode: "MO" },
        ],
      },
    ],
  },
  {
    countryCode: "AU",
    regions: [
      {
        code: "AU-WA",
        name: { en: "Western Australia", zh: "西澳大利亚州" },
        cities: [
          { id: "au-perth", name: { en: "Perth", zh: "珀斯" }, latitude: -31.9523, longitude: 115.8613, timezone: "Australia/Perth", countryCode: "AU" },
        ],
      },
      {
        code: "AU-SA",
        name: { en: "South Australia", zh: "南澳大利亚州" },
        cities: [
          { id: "au-adelaide", name: { en: "Adelaide", zh: "阿德莱德" }, latitude: -34.9285, longitude: 138.6007, timezone: "Australia/Adelaide", countryCode: "AU" },
        ],
      },
      {
        code: "AU-ACT",
        name: { en: "Australian Capital Territory", zh: "澳大利亚首都领地" },
        cities: [
          { id: "au-canberra", name: { en: "Canberra", zh: "堪培拉" }, latitude: -35.2809, longitude: 149.13, timezone: "Australia/Sydney", countryCode: "AU" },
        ],
      },
    ],
  },
  {
    countryCode: "CA",
    regions: [
      {
        code: "CA-AB",
        name: { en: "Alberta", zh: "艾伯塔省" },
        cities: [
          { id: "ca-calgary", name: { en: "Calgary", zh: "卡尔加里" }, latitude: 51.0447, longitude: -114.0719, timezone: "America/Edmonton", countryCode: "CA" },
        ],
      },
    ],
  },
];

LOCATION_DATA.push(...EXTRA_LOCATION_DATA);
EXTRA_REGIONS.forEach(({ countryCode, regions }) => extendCountry(countryCode, regions));
sortLocationData();

const DEFAULT_TRIP = {
  originCountry: "GB",
  originRegion: "GB-ENG",
  originCity: "gb-london",
  destinationCountry: "JP",
  destinationRegion: "JP-13",
  destinationCity: "jp-tokyo",
  departureDate: todayIso(),
  days: 7,
  tripType: "leisure",
  luggage: "carryon",
  travelerCount: 1,
  extras: [],
};

const copy = {
  en: {
    htmlLang: "en",
    title: "Smart Packing List Generator",
    description: "Choose a departure city and destination to estimate distance, travel time, time difference, weather, and a route-aware packing checklist.",
    ogDescription: "Generate a smarter packing list from your route, trip length, luggage, travel style, time zone difference, and destination weather.",
    brand: "RoutePack",
    navAria: "Top navigation",
    brandAria: "Back to home",
    reset: "Reset",
    eyebrow: "Route-aware travel tool",
    pageTitle: "Build a packing list from your route.",
    intro: "Pick both cities and the checklist adapts to distance, travel time, time zones, weather, luggage, and trip style.",
    routeHeroAlt: "Map route with travel documents",
    packingDetailAlt: "Packed suitcase with travel essentials",
    builderEyebrow: "Route studio",
    builderTitle: "Choose your trip",
    originLegend: "Departure",
    destinationLegend: "Destination",
    labels: {
      country: "Country",
      region: "Region",
      city: "City",
      departureDate: "Departure date",
      days: "Trip length",
      tripType: "Trip type",
      luggage: "Luggage",
      travelerCount: "Travelers",
      extras: "Add-ons",
    },
    extras: {
      work: "Work trip",
      family: "Kids or family",
      laundry: "Laundry access",
      medicine: "Medication",
      photography: "Photography",
    },
    resultEyebrow: "Your checklist",
    defaultResultTitle: "Route-aware packing list",
    packed: "packed",
    actions: {
      copy: "Copy checklist",
      download: "Download checklist",
      print: "Print checklist",
      share: "Copy share link",
    },
    footer: "Travel lighter. Forget less.",
    routeStatus: {
      loading: "Checking route, time zone, and destination weather...",
      ready: ({ origin, destination }) => `Planning from ${origin} to ${destination}.`,
      partialWeather: ({ origin, destination }) => `Planning from ${origin} to ${destination}. Weather is estimated because live forecast data was unavailable.`,
    },
    insights: {
      distance: "Distance",
      duration: "Travel time",
      timeDiff: "Time difference",
      weather: "Weather",
      checking: "Checking...",
      unknown: "-",
      sameZone: "Same zone",
      ahead: (hours) => `${hours}h ahead`,
      behind: (hours) => `${hours}h behind`,
      mode: {
        local: "local transit",
        road: "road / rail",
        flight: "flight day",
        longHaul: "long-haul flight",
      },
      approx: "about",
      estimated: "estimated",
    },
    summary: {
      route: "Route",
      length: "Length",
      weather: "Weather",
      luggage: "Luggage",
      travelers: "Travelers",
    },
    tripTitle: ({ days, origin, destination }) => `${days}-day trip from ${origin} to ${destination}`,
    counts: {
      item: "item",
      items: "items",
    },
    units: {
      item: ["item", "items"],
      set: ["set", "sets"],
      pair: ["pair", "pairs"],
      outfit: ["outfit", "outfits"],
      day: ["day", "days"],
      copy: ["copy", "copies"],
      bottle: ["bottle", "bottles"],
      pack: ["pack", "packs"],
    },
    categories: {
      route: "Route-smart items",
      documents: "Documents & money",
      clothing: "Clothing",
      toiletries: "Toiletries & health",
      tech: "Tech",
      carryon: "Carry-on",
      activity: "Trip-specific gear",
      before: "Before you leave",
      buy: "Buy before trip",
    },
    climates: {
      mild: "Mild",
      hot: "Hot",
      cold: "Cold",
      rainy: "Rainy",
      mixed: "Mixed",
      snowy: "Snowy",
      unknown: "Weather pending",
    },
    notes: {
      routeWindow: "Based on estimated travel duration.",
      timeShift: "Helpful when crossing multiple time zones.",
      longHaul: "Keep comfort items in your personal bag.",
      road: "Useful for road or rail trips.",
      weatherLayer: "Chosen from destination weather.",
      passport: "Automatically added for international routes.",
      governmentId: "Enough for most domestic routes.",
      visa: "Check rules for your passport and destination.",
      boarding: "Save an offline copy before leaving.",
      copies: "Keep one digital and one paper backup.",
      cards: "Bring a backup card stored separately.",
      insurance: "Save policy number and emergency phone.",
      emergency: "Include local emergency numbers if traveling abroad.",
      underwear: "Add one spare for delays.",
      socks: "Choose breathable pairs for walking days.",
      tops: "Laundry access reduces quantity.",
      bottoms: "Pack versatile colors.",
      sleepwear: "One comfortable set is usually enough.",
      outerwear: "Useful for planes and cool evenings.",
      warmLayer: "Destination climate suggests colder conditions.",
      rain: "Forecast or climate suggests wet weather.",
      swim: "Useful for beaches, pools, or hot destinations.",
      shoes: "Wear the bulkiest pair in transit.",
      laundryBag: "Separates clean and worn clothes.",
      liquids: "Follow carry-on liquid rules.",
      sunscreen: "Added for heat, beach, or outdoor trips.",
      meds: "Keep medication in your personal bag.",
      firstAid: "Include pain relief and stomach medicine.",
      charger: "Pack cable plus wall plug.",
      powerBank: "Keep it in carry-on for flights.",
      adapter: "Automatically added for international routes.",
      laptop: "Only if work tasks require it.",
      camera: "Add memory cards and charger.",
      headphones: "Useful for long transfers.",
      dayBag: "For daily essentials at the destination.",
      water: "Empty before airport security.",
      snacks: "Useful for delays and long transfers.",
      clothesCarry: "Helpful if checked luggage is delayed.",
      valuables: "Keep documents and valuables together.",
      business: "Keep one wrinkle-resistant outfit ready.",
      beach: "Pack something that dries quickly.",
      outdoor: "Match terrain and weather.",
      family: "Include comfort items and small activities.",
      cubes: "Keeps categories easy to find.",
      weather: "Update this the day before departure.",
      checkIn: "Save boarding pass offline.",
      home: "Trash, lights, doors, thermostat.",
      luggageWeight: "Avoid airport repacking.",
      bank: "Reduce false fraud alerts abroad.",
      destinationItem: "Buy locally if it is bulky or weather-specific.",
    },
    items: {
      routeWindow: "Travel time buffer",
      timeShift: "Jet lag comfort kit",
      longHaul: "Long-haul comfort items",
      road: "Road / rail snacks and water",
      weatherLayer: "Weather-ready layer",
      passport: "Passport",
      governmentId: "Government ID",
      visa: "Visa / ETA confirmation",
      boarding: "Tickets or boarding passes",
      insurance: "Travel insurance details",
      copies: "Document copies",
      cards: "Cash and payment cards",
      emergency: "Emergency contacts",
      underwear: "Underwear",
      socks: "Socks",
      tops: "Tops",
      bottoms: "Bottoms",
      sleepwear: "Sleepwear",
      outerwear: "Light jacket or layer",
      warmLayer: "Warm layer",
      rain: "Rain jacket or umbrella",
      swim: "Swimwear",
      shoes: "Comfortable shoes",
      laundryBag: "Laundry bag",
      toothbrush: "Toothbrush and toothpaste",
      deodorant: "Deodorant",
      skincare: "Skincare basics",
      liquids: "Travel-size liquids bag",
      sunscreen: "Sunscreen",
      meds: "Prescription medication",
      firstAid: "Small first aid kit",
      sanitizer: "Hand sanitizer",
      phoneCharger: "Phone charger",
      powerBank: "Power bank",
      adapter: "Travel adapter",
      laptop: "Laptop and charger",
      camera: "Camera gear",
      headphones: "Headphones",
      dayBag: "Day bag",
      water: "Reusable water bottle",
      snacks: "Snacks",
      clothesCarry: "One spare outfit",
      valuables: "Valuables and documents pouch",
      business: "Business outfit",
      beach: "Quick-dry towel",
      outdoor: "Outdoor gear",
      family: "Family essentials",
      cubes: "Packing cubes",
      weather: "Check final weather",
      checkIn: "Check in online",
      home: "Secure home before leaving",
      luggageWeight: "Check luggage weight",
      bank: "Notify bank if needed",
      destinationItem: "Destination-specific item",
    },
    options: {
      tripType: {
        leisure: "Leisure",
        business: "Business",
        beach: "Beach",
        city: "City break",
        outdoor: "Outdoor",
        digitalNomad: "Remote work",
      },
      luggage: {
        carryon: "Carry-on only",
        checked: "Checked bag",
        backpack: "Backpack",
      },
    },
    ads: {
      label: "Advertisement",
      resultInline: {
        title: "Ad slot reserved",
        body: "Place a responsive ad unit here after ad network approval.",
      },
      sideRail: {
        title: "Sidebar ad",
        body: "A tall desktop placement for travel cards, insurance, or booking ads.",
      },
      sideRailSecond: {
        title: "Second sidebar ad",
        body: "Use this for another responsive unit or affiliate placement.",
      },
    },
    messages: {
      copied: "Checklist copied.",
      downloaded: "Checklist downloaded.",
      shared: "Share link copied.",
      copyFallback: "Could not copy automatically.",
    },
  },
  zh: {
    htmlLang: "zh-CN",
    title: "智能旅行打包清单生成器",
    description: "选择出发城市和目的地，自动估算距离、旅行时间、时差、天气，并生成路线感知的旅行打包清单。",
    ogDescription: "根据路线、行程天数、行李类型、旅行风格、时差和目的地天气生成更智能的打包清单。",
    brand: "RoutePack",
    navAria: "顶部导航",
    brandAria: "返回首页",
    reset: "重置",
    eyebrow: "路线感知旅行工具",
    pageTitle: "根据路线自动生成打包清单",
    intro: "选择出发地和目的地后，清单会根据距离、耗时、时区、天气、行李和旅行类型自动调整。",
    routeHeroAlt: "带旅行证件的路线地图",
    packingDetailAlt: "装好旅行用品的行李箱",
    builderEyebrow: "路线工作台",
    builderTitle: "选择你的行程",
    originLegend: "出发地",
    destinationLegend: "目的地",
    labels: {
      country: "国家",
      region: "地区",
      city: "城市",
      departureDate: "出发日期",
      days: "行程天数",
      tripType: "旅行类型",
      luggage: "行李类型",
      travelerCount: "人数",
      extras: "附加需求",
    },
    extras: {
      work: "商务出行",
      family: "亲子/家庭",
      laundry: "可洗衣",
      medicine: "需要药品",
      photography: "摄影设备",
    },
    resultEyebrow: "你的清单",
    defaultResultTitle: "路线感知打包清单",
    packed: "已打包",
    actions: {
      copy: "复制清单",
      download: "下载清单",
      print: "打印清单",
      share: "复制分享链接",
    },
    footer: "轻装出发，少忘东西。",
    routeStatus: {
      loading: "正在检查路线、时区和目的地天气...",
      ready: ({ origin, destination }) => `正在规划 ${origin} 到 ${destination} 的行程。`,
      partialWeather: ({ origin, destination }) => `正在规划 ${origin} 到 ${destination} 的行程。实时天气不可用，已使用估算天气。`,
    },
    insights: {
      distance: "距离",
      duration: "旅行时间",
      timeDiff: "时差",
      weather: "天气",
      checking: "查询中...",
      unknown: "-",
      sameZone: "同一时区",
      ahead: (hours) => `快 ${hours} 小时`,
      behind: (hours) => `慢 ${hours} 小时`,
      mode: {
        local: "本地交通",
        road: "公路/铁路",
        flight: "飞行日",
        longHaul: "长途飞行",
      },
      approx: "约",
      estimated: "估算",
    },
    summary: {
      route: "路线",
      length: "天数",
      weather: "天气",
      luggage: "行李",
      travelers: "人数",
    },
    tripTitle: ({ days, origin, destination }) => `${origin} 到 ${destination} 的 ${days} 天游`,
    counts: {
      item: "项",
      items: "项",
    },
    units: {
      item: "件",
      set: "套",
      pair: "双",
      outfit: "套",
      day: "天",
      copy: "份",
      bottle: "瓶",
      pack: "包",
    },
    categories: {
      route: "路线智能物品",
      documents: "证件与资金",
      clothing: "衣物",
      toiletries: "洗护与健康",
      tech: "电子设备",
      carryon: "随身携带",
      activity: "场景装备",
      before: "出发前",
      buy: "出发前购买",
    },
    climates: {
      mild: "温和",
      hot: "炎热",
      cold: "寒冷",
      rainy: "多雨",
      mixed: "温差大",
      snowy: "有雪",
      unknown: "等待天气",
    },
    notes: {
      routeWindow: "根据预计旅行耗时添加。",
      timeShift: "跨越多个时区时更有用。",
      longHaul: "建议放在随身包里。",
      road: "适合公路或铁路行程。",
      weatherLayer: "根据目的地天气添加。",
      passport: "国际路线自动添加。",
      governmentId: "多数国内路线足够使用。",
      visa: "按护照和目的地规则再次确认。",
      boarding: "出发前保存离线版本。",
      copies: "保留电子版和纸质备份。",
      cards: "准备一张备用卡并分开放。",
      insurance: "保存保单号和紧急电话。",
      emergency: "出境时可加入当地紧急号码。",
      underwear: "为延误多准备一件。",
      socks: "长时间步行建议选透气袜。",
      tops: "可洗衣会减少数量。",
      bottoms: "选择好搭配的颜色。",
      sleepwear: "通常一套舒适睡衣足够。",
      outerwear: "飞机和夜间降温都用得上。",
      warmLayer: "目的地气候偏冷。",
      rain: "天气或气候提示可能下雨。",
      swim: "适合海滩、泳池或炎热目的地。",
      shoes: "最占空间的一双建议路上穿。",
      laundryBag: "分开放干净和已穿衣物。",
      liquids: "遵守随身液体限制。",
      sunscreen: "炎热、海滩或户外行程自动添加。",
      meds: "处方药放随身包。",
      firstAid: "可放止痛药和肠胃药。",
      charger: "带线和充电头。",
      powerBank: "飞行时放随身包。",
      adapter: "国际路线自动添加。",
      laptop: "只在工作需要时携带。",
      camera: "别忘存储卡和充电器。",
      headphones: "长时间转机很实用。",
      dayBag: "目的地日常出门使用。",
      water: "过安检前保持空瓶。",
      snacks: "延误和长途转机时实用。",
      clothesCarry: "托运行李延误时有备用。",
      valuables: "证件和贵重物品集中管理。",
      business: "准备一套不易皱的衣服。",
      beach: "选择快干材质。",
      outdoor: "按地形和天气调整。",
      family: "加入安抚物和小活动用品。",
      cubes: "更容易按类别整理。",
      weather: "出发前一天再次确认。",
      checkIn: "保存离线登机牌。",
      home: "垃圾、灯、电器、门窗。",
      luggageWeight: "避免机场重新整理。",
      bank: "降低境外刷卡误拦截。",
      destinationItem: "体积大或强天气相关物品可到当地购买。",
    },
    items: {
      routeWindow: "旅行时间缓冲",
      timeShift: "倒时差舒适包",
      longHaul: "长途飞行舒适用品",
      road: "公路/铁路零食和水",
      weatherLayer: "适配天气的外层",
      passport: "护照",
      governmentId: "身份证件",
      visa: "签证/ETA 确认",
      boarding: "票据或登机牌",
      insurance: "旅行保险信息",
      copies: "证件备份",
      cards: "现金和银行卡",
      emergency: "紧急联系人",
      underwear: "内衣",
      socks: "袜子",
      tops: "上衣",
      bottoms: "下装",
      sleepwear: "睡衣",
      outerwear: "轻外套",
      warmLayer: "保暖层",
      rain: "雨衣或雨伞",
      swim: "泳衣",
      shoes: "舒适鞋",
      laundryBag: "脏衣袋",
      toothbrush: "牙刷和牙膏",
      deodorant: "除味用品",
      skincare: "基础护肤",
      liquids: "旅行装液体袋",
      sunscreen: "防晒",
      meds: "处方药",
      firstAid: "小药包",
      sanitizer: "免洗洗手液",
      phoneCharger: "手机充电器",
      powerBank: "充电宝",
      adapter: "旅行转换插头",
      laptop: "电脑和充电器",
      camera: "摄影设备",
      headphones: "耳机",
      dayBag: "日用小包",
      water: "可重复使用水瓶",
      snacks: "零食",
      clothesCarry: "备用一套衣物",
      valuables: "贵重物品收纳袋",
      business: "商务套装",
      beach: "快干毛巾",
      outdoor: "户外装备",
      family: "家庭出行用品",
      cubes: "收纳袋",
      weather: "检查最终天气",
      checkIn: "线上值机",
      home: "离家前确认安全",
      luggageWeight: "检查行李重量",
      bank: "必要时通知银行",
      destinationItem: "目的地专用物品",
    },
    options: {
      tripType: {
        leisure: "休闲",
        business: "商务",
        beach: "海滩",
        city: "城市短途",
        outdoor: "户外",
        digitalNomad: "远程办公",
      },
      luggage: {
        carryon: "仅随身行李",
        checked: "托运行李",
        backpack: "背包",
      },
    },
    ads: {
      label: "广告",
      resultInline: {
        title: "广告位预留",
        body: "广告账号通过审核后，可在这里放置响应式广告单元。",
      },
      sideRail: {
        title: "侧边广告",
        body: "适合旅行卡、保险、订票等高展示位置。",
      },
      sideRailSecond: {
        title: "第二侧边广告",
        body: "可放另一个响应式广告或联盟推广位。",
      },
    },
    messages: {
      copied: "清单已复制。",
      downloaded: "清单已下载。",
      shared: "分享链接已复制。",
      copyFallback: "无法自动复制。",
    },
  },
};

const state = {
  lang: getInitialLanguage(),
  trip: sanitizeTrip(readTripFromUrl()),
  route: null,
  items: [],
  packed: new Set(),
  weatherToken: 0,
  weatherCache: new Map(),
  toastTimer: null,
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindEvents();
  renderStaticText();
  renderFormControls();
  planRoute();
}

function bindEvents() {
  $$(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  $("#resetButton").addEventListener("click", () => {
    state.trip = sanitizeTrip({ ...DEFAULT_TRIP, departureDate: todayIso() });
    state.packed.clear();
    renderStaticText();
    renderFormControls();
    planRoute();
  });

  ["origin", "destination"].forEach((prefix) => {
    $(`#${prefix}Country`).addEventListener("change", () => handleLocationChange(prefix, "country"));
    $(`#${prefix}Region`).addEventListener("change", () => handleLocationChange(prefix, "region"));
    $(`#${prefix}City`).addEventListener("change", () => handleLocationChange(prefix, "city"));
  });

  ["departureDate", "days", "tripType", "luggage", "travelerCount"].forEach((id) => {
    $(`#${id}`).addEventListener("change", () => {
      readTripOptions();
      planRoute();
    });
  });

  $$(".step-button").forEach((button) => {
    button.addEventListener("click", () => {
      const input = $(`#${button.dataset.stepTarget}`);
      const step = Number(button.dataset.step);
      const min = Number(input.min || 0);
      const max = Number(input.max || 999);
      input.value = String(clamp(Number(input.value || 0) + step, min, max));
      readTripOptions();
      planRoute();
    });
  });

  $$('input[name="extras"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      readTripOptions();
      planRoute();
    });
  });

  $("#checklist").addEventListener("change", (event) => {
    const target = event.target;
    if (!target.matches('input[type="checkbox"][data-item-id]')) return;
    if (target.checked) {
      state.packed.add(target.dataset.itemId);
    } else {
      state.packed.delete(target.dataset.itemId);
    }
    renderPackedCount();
  });

  $("#copyButton").addEventListener("click", async () => {
    const ok = await writeClipboard(buildChecklistText());
    showToast(ok ? copy[state.lang].messages.copied : copy[state.lang].messages.copyFallback);
  });
  $("#downloadButton").addEventListener("click", downloadChecklist);
  $("#printButton").addEventListener("click", () => window.print());
  $("#shareButton").addEventListener("click", async () => {
    writeShareUrl();
    const ok = await writeClipboard(window.location.href);
    showToast(ok ? copy[state.lang].messages.shared : copy[state.lang].messages.copyFallback);
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang) || lang === state.lang) return;
  state.lang = lang;
  localStorage.setItem("routepack-language", lang);
  renderStaticText();
  renderFormControls();
  renderRoute(state.route, state.route?.weather?.live ? "ready" : "partialWeather");
  state.items = buildChecklist(state.trip, state.route);
  renderChecklist();
  writeShareUrl();
}

function renderStaticText() {
  const t = copy[state.lang];
  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  setMeta("description", t.description);
  setMeta("og:description", t.ogDescription, "property");
  setMeta("og:title", t.title, "property");

  $("#topbar").setAttribute("aria-label", t.navAria);
  $("#brandLink").setAttribute("aria-label", t.brandAria);
  $("#brandTitle").textContent = t.brand;
  $("#resetText").textContent = t.reset;
  $("#eyebrow").textContent = t.eyebrow;
  $("#pageTitle").textContent = t.pageTitle;
  $("#pageIntro").textContent = t.intro;
  $("#routeHeroImage").alt = t.routeHeroAlt;
  $("#packingDetailImage").alt = t.packingDetailAlt;
  $("#builderEyebrow").textContent = t.builderEyebrow;
  $("#builderTitle").textContent = t.builderTitle;
  $("#originLegend").textContent = t.originLegend;
  $("#destinationLegend").textContent = t.destinationLegend;

  ["origin", "destination"].forEach((prefix) => {
    $(`#${prefix}CountryLabel`).textContent = t.labels.country;
    $(`#${prefix}RegionLabel`).textContent = t.labels.region;
    $(`#${prefix}CityLabel`).textContent = t.labels.city;
  });

  $("#departureDateLabel").textContent = t.labels.departureDate;
  $("#daysLabel").textContent = t.labels.days;
  $("#tripTypeLabel").textContent = t.labels.tripType;
  $("#luggageLabel").textContent = t.labels.luggage;
  $("#travelerCountLabel").textContent = t.labels.travelerCount;
  $("#extrasLegend").textContent = t.labels.extras;

  $("#extraWork").textContent = t.extras.work;
  $("#extraFamily").textContent = t.extras.family;
  $("#extraLaundry").textContent = t.extras.laundry;
  $("#extraMedicine").textContent = t.extras.medicine;
  $("#extraPhotography").textContent = t.extras.photography;

  $("#resultEyebrow").textContent = t.resultEyebrow;
  $("#packedLabel").textContent = t.packed;
  $("#distanceLabel").textContent = t.insights.distance;
  $("#durationLabel").textContent = t.insights.duration;
  $("#timeDiffLabel").textContent = t.insights.timeDiff;
  $("#weatherLabel").textContent = t.insights.weather;
  $("#footerText").textContent = t.footer;

  $("#copyButton").setAttribute("aria-label", t.actions.copy);
  $("#downloadButton").setAttribute("aria-label", t.actions.download);
  $("#printButton").setAttribute("aria-label", t.actions.print);
  $("#shareButton").setAttribute("aria-label", t.actions.share);

  $$(".lang-button").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderAdPlaceholders();
}

function renderFormControls() {
  state.trip = sanitizeTrip(state.trip);
  renderLocationSelectors("origin");
  renderLocationSelectors("destination");
  renderOptionSelect("tripType", copy[state.lang].options.tripType, state.trip.tripType);
  renderOptionSelect("luggage", copy[state.lang].options.luggage, state.trip.luggage);
  $("#departureDate").value = state.trip.departureDate;
  $("#days").value = state.trip.days;
  $("#travelerCount").value = state.trip.travelerCount;
  $$('input[name="extras"]').forEach((checkbox) => {
    checkbox.checked = state.trip.extras.includes(checkbox.value);
  });
  renderRouteMini();
}

function renderLocationSelectors(prefix) {
  const country = findCountry(state.trip[`${prefix}Country`]) || LOCATION_DATA[0];
  const region = country.regions.find((item) => item.code === state.trip[`${prefix}Region`]) || country.regions[0];
  const city = region.cities.find((item) => item.id === state.trip[`${prefix}City`]) || region.cities[0];

  state.trip[`${prefix}Country`] = country.code;
  state.trip[`${prefix}Region`] = region.code;
  state.trip[`${prefix}City`] = city.id;

  setSelectOptions(
    $(`#${prefix}Country`),
    LOCATION_DATA.map((item) => ({ value: item.code, label: localize(item.name) })),
    country.code,
  );
  setSelectOptions(
    $(`#${prefix}Region`),
    country.regions.map((item) => ({ value: item.code, label: localize(item.name) })),
    region.code,
  );
  setSelectOptions(
    $(`#${prefix}City`),
    region.cities.map((item) => ({ value: item.id, label: localize(item.name) })),
    city.id,
  );
}

function renderOptionSelect(id, options, selectedValue) {
  setSelectOptions(
    $(`#${id}`),
    Object.entries(options).map(([value, label]) => ({ value, label })),
    selectedValue,
  );
}

function setSelectOptions(select, options, selectedValue) {
  const fragment = document.createDocumentFragment();
  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    fragment.append(option);
  });
  select.replaceChildren(fragment);
  select.value = selectedValue;
}

function handleLocationChange(prefix, level) {
  if (level === "country") {
    const country = findCountry($(`#${prefix}Country`).value) || LOCATION_DATA[0];
    const region = country.regions[0];
    const city = region.cities[0];
    state.trip[`${prefix}Country`] = country.code;
    state.trip[`${prefix}Region`] = region.code;
    state.trip[`${prefix}City`] = city.id;
  }

  if (level === "region") {
    const country = findCountry(state.trip[`${prefix}Country`]) || LOCATION_DATA[0];
    const region = country.regions.find((item) => item.code === $(`#${prefix}Region`).value) || country.regions[0];
    const city = region.cities[0];
    state.trip[`${prefix}Region`] = region.code;
    state.trip[`${prefix}City`] = city.id;
  }

  if (level === "city") {
    state.trip[`${prefix}City`] = $(`#${prefix}City`).value;
  }

  renderLocationSelectors(prefix);
  renderRouteMini();
  planRoute();
}

function readTripOptions() {
  state.trip.departureDate = $("#departureDate").value || todayIso();
  state.trip.days = clamp(Number($("#days").value || DEFAULT_TRIP.days), 1, 60);
  state.trip.travelerCount = clamp(Number($("#travelerCount").value || DEFAULT_TRIP.travelerCount), 1, 8);
  state.trip.tripType = $("#tripType").value || DEFAULT_TRIP.tripType;
  state.trip.luggage = $("#luggage").value || DEFAULT_TRIP.luggage;
  state.trip.extras = $$('input[name="extras"]:checked').map((checkbox) => checkbox.value);
  $("#days").value = state.trip.days;
  $("#travelerCount").value = state.trip.travelerCount;
}

async function planRoute() {
  state.trip = sanitizeTrip(state.trip);
  writeShareUrl();
  const origin = getSelectedPlace("origin");
  const destination = getSelectedPlace("destination");
  const route = buildRoute(origin, destination, state.trip, estimateClimate(destination));
  state.route = route;
  state.items = buildChecklist(state.trip, route);
  renderRoute(route, "loading");
  renderChecklist();

  const token = ++state.weatherToken;
  try {
    const weather = await getDestinationWeather(destination, state.trip.days);
    if (token !== state.weatherToken) return;
    state.route = { ...route, weather };
    state.items = buildChecklist(state.trip, state.route);
    renderRoute(state.route, "ready");
    renderChecklist();
  } catch (_error) {
    if (token !== state.weatherToken) return;
    state.route = route;
    state.items = buildChecklist(state.trip, route);
    renderRoute(route, "partialWeather");
    renderChecklist();
  }
}

function buildRoute(origin, destination, trip, weather) {
  const distanceKm = Math.round(haversineKm(origin, destination));
  const travel = estimateTravel(distanceKm);
  const timeDiffHours = getTimeDiffHours(origin.timezone, destination.timezone, trip.departureDate);
  return {
    origin,
    destination,
    distanceKm,
    travel,
    timeDiffHours,
    international: origin.countryCode !== destination.countryCode,
    weather,
  };
}

function renderRoute(route, statusKey) {
  const t = copy[state.lang];
  if (!route) return;
  const origin = placeLabel(route.origin);
  const destination = placeLabel(route.destination);

  const statusCopy = t.routeStatus[statusKey];
  $("#routeStatus").textContent = typeof statusCopy === "function" ? statusCopy({ origin, destination }) : statusCopy;
  $("#distanceValue").textContent = formatDistance(route.distanceKm);
  $("#durationValue").textContent = `${formatDuration(route.travel.hours)} · ${t.insights.mode[route.travel.mode]}`;
  $("#timeDiffValue").textContent = formatTimeDiff(route.timeDiffHours);
  $("#weatherValue").textContent = statusKey === "loading" ? t.insights.checking : formatWeather(route.weather);
  $("#resultTitle").textContent = t.tripTitle({ days: state.trip.days, origin, destination });
  renderRouteMini();
  renderSummary(route);
}

function renderRouteMini() {
  const origin = getSelectedPlace("origin");
  const destination = getSelectedPlace("destination");
  $("#routeMini").textContent = `${placeLabel(origin)} ${state.lang === "zh" ? "到" : "to"} ${placeLabel(destination)}`;
}

function renderSummary(route) {
  const t = copy[state.lang];
  const summaryItems = [
    { label: t.summary.route, value: `${placeLabel(route.origin)} -> ${placeLabel(route.destination)}` },
    { label: t.summary.length, value: `${state.trip.days} ${formatUnit(state.trip.days, "day")}` },
    { label: t.summary.weather, value: formatWeather(route.weather) },
    { label: t.summary.luggage, value: t.options.luggage[state.trip.luggage] },
    { label: t.summary.travelers, value: String(state.trip.travelerCount) },
  ];

  const fragment = document.createDocumentFragment();
  summaryItems.forEach((item) => {
    const piece = document.createElement("div");
    piece.className = "summary-pill";
    piece.innerHTML = `<span></span><strong></strong>`;
    piece.querySelector("span").textContent = item.label;
    piece.querySelector("strong").textContent = item.value;
    fragment.append(piece);
  });
  $("#summaryStrip").replaceChildren(fragment);
}

function renderChecklist() {
  const checklist = $("#checklist");
  const t = copy[state.lang];
  const grouped = state.items.reduce((map, item) => {
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category).push(item);
    return map;
  }, new Map());

  const fragment = document.createDocumentFragment();
  grouped.forEach((items, category) => {
    const section = document.createElement("section");
    section.className = "check-group";

    const header = document.createElement("div");
    header.className = "check-group-header";
    const title = document.createElement("h3");
    title.textContent = t.categories[category];
    const count = document.createElement("span");
    count.textContent = `${items.length} ${items.length === 1 ? t.counts.item : t.counts.items}`;
    header.append(title, count);

    const list = document.createElement("div");
    list.className = "check-items";

    items.forEach((item) => {
      const label = document.createElement("label");
      label.className = "check-item";
      const checked = state.packed.has(item.id);
      label.innerHTML = `
        <input type="checkbox" data-item-id="${item.id}" ${checked ? "checked" : ""} />
        <span class="check-box" aria-hidden="true"></span>
        <span class="item-copy">
          <strong></strong>
          <small></small>
          <em></em>
        </span>
      `;
      label.querySelector("strong").textContent = item.name;
      label.querySelector("small").textContent = item.quantity;
      label.querySelector("em").textContent = item.note;
      list.append(label);
    });

    section.append(header, list);
    fragment.append(section);
  });

  checklist.replaceChildren(fragment);
  renderPackedCount();
}

function renderPackedCount() {
  const activeIds = new Set(state.items.map((item) => item.id));
  state.packed.forEach((id) => {
    if (!activeIds.has(id)) state.packed.delete(id);
  });
  $("#packedCount").textContent = `${state.packed.size}/${state.items.length}`;
}

function buildChecklist(trip, route) {
  if (!route) return [];
  const t = copy[state.lang];
  const days = trip.days;
  const hasLaundry = trip.extras.includes("laundry");
  const isWork = trip.tripType === "business" || trip.tripType === "digitalNomad" || trip.extras.includes("work");
  const isBeach = trip.tripType === "beach" || route.weather.climate === "hot";
  const isOutdoor = trip.tripType === "outdoor";
  const isFamily = trip.extras.includes("family");
  const needsMeds = trip.extras.includes("medicine");
  const hasCamera = trip.extras.includes("photography");
  const isCold = ["cold", "snowy"].includes(route.weather.climate);
  const isRainy = ["rainy", "snowy"].includes(route.weather.climate);
  const isMixed = route.weather.climate === "mixed";
  const isLongTravel = route.travel.hours >= 7;
  const items = [];

  const add = (category, key, quantity = 1, unit = "item", noteKey = key) => {
    items.push({
      id: `${category}-${key}`,
      category,
      key,
      name: t.items[key],
      note: t.notes[noteKey],
      quantity: quantity ? formatQuantity(quantity, unit) : "",
    });
  };

  add("route", "routeWindow", 1, "set");
  if (Math.abs(route.timeDiffHours) >= 3) add("route", "timeShift", 1, "set");
  if (route.travel.mode === "longHaul") add("route", "longHaul", 1, "set");
  if (route.travel.mode === "road") add("route", "road", 1, "set");
  if (isCold || isRainy || isMixed) add("route", "weatherLayer", 1, "item");

  add("documents", route.international ? "passport" : "governmentId", 1, "item");
  if (route.international) add("documents", "visa", 1, "copy");
  add("documents", "boarding", 1, "set");
  add("documents", "insurance", 1, "copy");
  add("documents", "copies", 2, "copy");
  add("documents", "cards", 2, "item");
  add("documents", "emergency", 1, "copy");

  add("clothing", "underwear", clothingQuantity(days + 1, hasLaundry, 5, 14), "item");
  add("clothing", "socks", clothingQuantity(days + 1, hasLaundry, 5, 14), "pair");
  add("clothing", "tops", clothingQuantity(days, hasLaundry, 4, 12), "item");
  add("clothing", "bottoms", clothingQuantity(Math.ceil(days / 2), hasLaundry, 3, 6), "item");
  add("clothing", "sleepwear", days > 8 ? 2 : 1, "set");
  add("clothing", "outerwear", 1, "item");
  if (isCold || isMixed) add("clothing", "warmLayer", 1, "item");
  if (isRainy) add("clothing", "rain", 1, "item");
  if (isBeach) add("clothing", "swim", 1, "set");
  add("clothing", "shoes", trip.luggage === "backpack" ? 1 : 2, "pair");
  add("clothing", "laundryBag", 1, "item");

  add("toiletries", "toothbrush", 1, "set");
  add("toiletries", "deodorant", 1, "item");
  add("toiletries", "skincare", 1, "set");
  add("toiletries", "liquids", 1, "pack");
  if (isBeach || isOutdoor) add("toiletries", "sunscreen", 1, "bottle");
  if (needsMeds) add("toiletries", "meds", 1, "set");
  add("toiletries", "firstAid", 1, "set");
  add("toiletries", "sanitizer", 1, "bottle");

  add("tech", "phoneCharger", 1, "set");
  add("tech", "powerBank", 1, "item");
  if (route.international) add("tech", "adapter", 1, "item");
  if (isWork) add("tech", "laptop", 1, "set");
  if (hasCamera) add("tech", "camera", 1, "set");
  add("tech", "headphones", 1, "item");

  add("carryon", "dayBag", 1, "item");
  add("carryon", "water", 1, "bottle");
  if (isLongTravel || route.travel.mode === "road") add("carryon", "snacks", 1, "pack");
  if (trip.luggage === "checked" || route.travel.mode === "longHaul") add("carryon", "clothesCarry", 1, "outfit");
  add("carryon", "valuables", 1, "item");

  if (isWork) add("activity", "business", 1, "outfit");
  if (isBeach) add("activity", "beach", 1, "item");
  if (isOutdoor) add("activity", "outdoor", 1, "set");
  if (isFamily) add("activity", "family", 1, "set");
  add("activity", "cubes", trip.luggage === "backpack" ? 2 : 4, "item");

  add("before", "weather", 1, "item");
  add("before", "checkIn", 1, "item");
  add("before", "home", 1, "set");
  add("before", "luggageWeight", 1, "item");
  if (route.international) add("before", "bank", 1, "item");

  if (isRainy || isCold || isBeach) add("buy", "destinationItem", 1, "item");

  return items;
}

async function getDestinationWeather(destination, days) {
  const cacheKey = `${destination.id}:${days}`;
  if (state.weatherCache.has(cacheKey)) return state.weatherCache.get(cacheKey);

  const params = new URLSearchParams({
    latitude: String(destination.latitude),
    longitude: String(destination.longitude),
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum",
    timezone: "auto",
    forecast_days: String(clamp(days, 1, 16)),
  });

  const response = await fetch(`${API_CONFIG.forecastUrl}?${params.toString()}`);
  if (!response.ok) throw new Error("Forecast request failed");
  const data = await response.json();
  const daily = data.daily || {};
  const maxes = (daily.temperature_2m_max || []).filter(Number.isFinite);
  const mins = (daily.temperature_2m_min || []).filter(Number.isFinite);
  const precipitation = (daily.precipitation_sum || []).filter(Number.isFinite).reduce((sum, value) => sum + value, 0);
  const codes = (daily.weather_code || []).filter(Number.isFinite);
  if (!maxes.length || !mins.length) throw new Error("Forecast missing temperatures");

  const weather = {
    live: true,
    climate: classifyWeather({
      maxAvg: average(maxes),
      minAvg: average(mins),
      precipitation,
      codes,
      latitude: destination.latitude,
    }),
    maxAvg: average(maxes),
    minAvg: average(mins),
    precipitation,
  };
  state.weatherCache.set(cacheKey, weather);
  return weather;
}

function classifyWeather({ maxAvg, minAvg, precipitation, codes, latitude }) {
  if (minAvg <= 4 && codes.some((code) => code >= 71 && code <= 86)) return "snowy";
  if (precipitation >= 8 || codes.some((code) => code >= 51 && code <= 67)) return "rainy";
  if (maxAvg >= 29 || Math.abs(latitude) < 18) return "hot";
  if (minAvg <= 5) return "cold";
  if (maxAvg - minAvg >= 13) return "mixed";
  return "mild";
}

function estimateClimate(destination) {
  const month = new Date().getMonth() + 1;
  const absLat = Math.abs(destination.latitude);
  const southern = destination.latitude < -15;
  const winter = southern ? month >= 6 && month <= 8 : month === 12 || month <= 2;
  const summer = southern ? month === 12 || month <= 2 : month >= 6 && month <= 8;

  let climate = "mild";
  if (absLat < 23) climate = "hot";
  if (winter && absLat > 45) climate = "cold";
  if (winter && absLat > 55) climate = "snowy";
  if (summer && absLat > 25) climate = "hot";

  return {
    live: false,
    climate,
    maxAvg: climate === "hot" ? 31 : climate === "cold" ? 7 : climate === "snowy" ? 2 : 22,
    minAvg: climate === "hot" ? 24 : climate === "cold" ? 0 : climate === "snowy" ? -4 : 13,
    precipitation: climate === "rainy" ? 12 : 2,
  };
}

function formatWeather(weather) {
  if (!weather) return copy[state.lang].climates.unknown;
  const t = copy[state.lang];
  const range = `${Math.round(weather.minAvg)}-${Math.round(weather.maxAvg)}°C`;
  return `${t.climates[weather.climate]} · ${range}${weather.live ? "" : ` · ${t.insights.estimated}`}`;
}

function findCountry(code) {
  return LOCATION_DATA.find((country) => country.code === code);
}

function extendCountry(countryCode, regions) {
  const country = LOCATION_DATA.find((item) => item.code === countryCode);
  if (!country) return;
  regions.forEach((region) => {
    const existingRegion = country.regions.find((item) => item.code === region.code);
    if (!existingRegion) {
      country.regions.push(region);
      return;
    }
    const existingCityIds = new Set(existingRegion.cities.map((city) => city.id));
    region.cities.forEach((city) => {
      if (!existingCityIds.has(city.id)) existingRegion.cities.push(city);
    });
  });
}

function sortLocationData() {
  LOCATION_DATA.sort((a, b) => a.name.en.localeCompare(b.name.en));
  LOCATION_DATA.forEach((country) => {
    country.regions.sort((a, b) => a.name.en.localeCompare(b.name.en));
    country.regions.forEach((region) => {
      region.cities.sort((a, b) => a.name.en.localeCompare(b.name.en));
    });
  });
}

function getSelectedPlace(prefix) {
  const country = findCountry(state.trip[`${prefix}Country`]) || LOCATION_DATA[0];
  const region = country.regions.find((item) => item.code === state.trip[`${prefix}Region`]) || country.regions[0];
  const city = region.cities.find((item) => item.id === state.trip[`${prefix}City`]) || region.cities[0];
  return {
    ...city,
    country,
    region,
  };
}

function localize(value) {
  return value?.[state.lang] || value?.en || "";
}

function placeLabel(place) {
  return localize(place.name);
}

function sanitizeTrip(trip = {}) {
  const next = {
    ...DEFAULT_TRIP,
    ...trip,
    extras: Array.isArray(trip.extras) ? trip.extras : DEFAULT_TRIP.extras,
  };
  next.departureDate = /^\d{4}-\d{2}-\d{2}$/.test(next.departureDate) ? next.departureDate : todayIso();
  next.days = clamp(Number(next.days || DEFAULT_TRIP.days), 1, 60);
  next.travelerCount = clamp(Number(next.travelerCount || DEFAULT_TRIP.travelerCount), 1, 8);
  next.tripType = copy.en.options.tripType[next.tripType] ? next.tripType : DEFAULT_TRIP.tripType;
  next.luggage = copy.en.options.luggage[next.luggage] ? next.luggage : DEFAULT_TRIP.luggage;
  next.extras = next.extras.filter((item) => copy.en.extras[item]);

  ["origin", "destination"].forEach((prefix) => {
    const country = findCountry(next[`${prefix}Country`]) || findCountry(DEFAULT_TRIP[`${prefix}Country`]);
    const region = country.regions.find((item) => item.code === next[`${prefix}Region`]) || country.regions[0];
    const city = region.cities.find((item) => item.id === next[`${prefix}City`]) || region.cities[0];
    next[`${prefix}Country`] = country.code;
    next[`${prefix}Region`] = region.code;
    next[`${prefix}City`] = city.id;
  });

  return next;
}

function readTripFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const trip = {};
  Object.keys(DEFAULT_TRIP).forEach((key) => {
    if (!params.has(key)) return;
    if (key === "extras") {
      trip.extras = params.get(key).split(",").filter(Boolean);
    } else {
      trip[key] = params.get(key);
    }
  });
  return trip;
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const saved = localStorage.getItem("routepack-language");
  if (SUPPORTED_LANGUAGES.includes(urlLang)) return urlLang;
  if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  return DEFAULT_LANGUAGE;
}

function writeShareUrl() {
  const params = new URLSearchParams();
  params.set("lang", state.lang);
  Object.entries(state.trip).forEach(([key, value]) => {
    if (key === "extras") {
      if (value.length) params.set(key, value.join(","));
      return;
    }
    params.set(key, String(value));
  });
  const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

function haversineKm(a, b) {
  const radius = 6371;
  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);
  const lat1 = toRad(a.latitude);
  const lat2 = toRad(b.latitude);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function estimateTravel(distanceKm) {
  if (distanceKm < 80) return { mode: "local", hours: Math.max(1, distanceKm / 45 + 0.5) };
  if (distanceKm < 800) return { mode: "road", hours: distanceKm / 85 + 1.5 };
  if (distanceKm < 3500) return { mode: "flight", hours: distanceKm / 760 + 3 };
  return { mode: "longHaul", hours: distanceKm / 820 + 4 };
}

function getTimeDiffHours(originTimezone, destinationTimezone, dateString) {
  const date = dateString ? new Date(`${dateString}T12:00:00Z`) : new Date();
  const originOffset = timezoneOffsetMinutes(originTimezone, date);
  const destinationOffset = timezoneOffsetMinutes(destinationTimezone, date);
  return Math.round(((destinationOffset - originOffset) / 60) * 2) / 2;
}

function timezoneOffsetMinutes(timezone, date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date).reduce((map, part) => {
    map[part.type] = part.value;
    return map;
  }, {});
  const hour = Number(parts.hour) === 24 ? 0 : Number(parts.hour);
  const asUtc = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), hour, Number(parts.minute), Number(parts.second));
  return Math.round((asUtc - date.getTime()) / 60000);
}

function formatDistance(km) {
  return state.lang === "zh" ? `${km.toLocaleString()} 公里` : `${km.toLocaleString()} km`;
}

function formatDuration(hours) {
  const rounded = hours < 6 ? Math.round(hours * 2) / 2 : Math.round(hours);
  return state.lang === "zh" ? `约 ${rounded} 小时` : `${copy[state.lang].insights.approx} ${rounded}h`;
}

function formatTimeDiff(hours) {
  const t = copy[state.lang].insights;
  if (hours === 0) return t.sameZone;
  const formatted = Math.abs(hours).toLocaleString(undefined, { maximumFractionDigits: 1 });
  return hours > 0 ? t.ahead(formatted) : t.behind(formatted);
}

function formatQuantity(quantity, unitKey) {
  if (state.lang === "zh") return `${quantity}${copy.zh.units[unitKey] || ""}`;
  const [singular, plural] = copy.en.units[unitKey] || copy.en.units.item;
  return `${quantity} ${quantity === 1 ? singular : plural}`;
}

function formatUnit(quantity, unitKey) {
  if (state.lang === "zh") return copy.zh.units[unitKey] || "";
  const [singular, plural] = copy.en.units[unitKey] || copy.en.units.item;
  return quantity === 1 ? singular : plural;
}

function clothingQuantity(quantity, hasLaundry, laundryMax, normalMax) {
  return Math.min(quantity, hasLaundry ? laundryMax : normalMax);
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value), min), max);
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function todayIso() {
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tzOffset).toISOString().slice(0, 10);
}

function setMeta(name, content, attribute = "name") {
  const element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (element) element.setAttribute("content", content);
}

function renderAdPlaceholders() {
  const t = copy[state.lang];
  $$(".ad-slot").forEach((slot) => {
    const slotKey = slot.dataset.adSlotKey;
    const copyKey = slot.dataset.adCopy || slotKey;
    slot.setAttribute("aria-label", t.ads.label);

    if (!ADSENSE_CONFIG.enabled || !ADSENSE_CONFIG.publisherId || !ADSENSE_CONFIG.slots[slotKey]) {
      slot.innerHTML = `
        <span>${t.ads.label}</span>
        <strong>${t.ads[copyKey].title}</strong>
        <p>${t.ads[copyKey].body}</p>
      `;
      return;
    }

    slot.innerHTML = `
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-${ADSENSE_CONFIG.publisherId}"
        data-ad-slot="${ADSENSE_CONFIG.slots[slotKey]}"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    `;
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  });
}

function buildChecklistText() {
  const route = state.route;
  const title = $("#resultTitle").textContent;
  const lines = [title, `${placeLabel(route.origin)} -> ${placeLabel(route.destination)}`, ""];
  const grouped = state.items.reduce((map, item) => {
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category).push(item);
    return map;
  }, new Map());

  grouped.forEach((items, category) => {
    lines.push(copy[state.lang].categories[category]);
    items.forEach((item) => {
      const mark = state.packed.has(item.id) ? "x" : " ";
      lines.push(`[${mark}] ${item.name} - ${item.quantity}${item.note ? ` (${item.note})` : ""}`);
    });
    lines.push("");
  });

  return lines.join("\n");
}

async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_error) {
      return fallbackCopy(text);
    }
  }
  return fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}

function downloadChecklist() {
  const blob = new Blob([buildChecklistText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `routepack-${state.trip.originCity}-to-${state.trip.destinationCity}.txt`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast(copy[state.lang].messages.downloaded);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}
