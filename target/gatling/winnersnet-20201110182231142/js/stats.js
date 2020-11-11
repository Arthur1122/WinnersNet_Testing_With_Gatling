var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "174",
        "ko": "26"
    },
    "minResponseTime": {
        "total": "579",
        "ok": "1199",
        "ko": "579"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "50921",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "18049",
        "ok": "12122",
        "ko": "57715"
    },
    "standardDeviation": {
        "total": "18242",
        "ok": "9630",
        "ko": "11427"
    },
    "percentiles1": {
        "total": "10414",
        "ok": "8701",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "17916",
        "ok": "15378",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "34710",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "50052",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 173,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 26,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.124",
        "ok": "0.978",
        "ko": "0.146"
    }
},
contents: {
"req_homepage-c1756": {
        type: "REQUEST",
        name: "HomePage",
path: "HomePage",
pathFormatted: "req_homepage-c1756",
stats: {
    "name": "HomePage",
    "numberOfRequests": {
        "total": "100",
        "ok": "76",
        "ko": "24"
    },
    "minResponseTime": {
        "total": "1348",
        "ok": "1348",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "50921",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "25290",
        "ok": "14329",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "22331",
        "ok": "12472",
        "ko": "1"
    },
    "percentiles1": {
        "total": "9565",
        "ok": "7935",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "50458",
        "ok": "22235",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "39450",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "50458",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 76,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 24,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.562",
        "ok": "0.427",
        "ko": "0.135"
    }
}
    },"req_fullreviewpage-e2ae8": {
        type: "REQUEST",
        name: "FullReviewPage",
path: "FullReviewPage",
pathFormatted: "req_fullreviewpage-e2ae8",
stats: {
    "name": "FullReviewPage",
    "numberOfRequests": {
        "total": "100",
        "ok": "98",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "579",
        "ok": "1199",
        "ko": "579"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "34754",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "10808",
        "ok": "10411",
        "ko": "30290"
    },
    "standardDeviation": {
        "total": "7872",
        "ok": "6108",
        "ko": "29711"
    },
    "percentiles1": {
        "total": "10682",
        "ok": "10682",
        "ko": "30290"
    },
    "percentiles2": {
        "total": "14760",
        "ok": "14593",
        "ko": "45146"
    },
    "percentiles3": {
        "total": "18143",
        "ok": "17911",
        "ko": "57030"
    },
    "percentiles4": {
        "total": "35006",
        "ok": "25356",
        "ko": "59407"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.562",
        "ok": "0.551",
        "ko": "0.011"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
