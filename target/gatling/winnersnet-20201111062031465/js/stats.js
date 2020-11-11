var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150",
        "ok": "145",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "1093",
        "ok": "1093",
        "ko": "1106"
    },
    "maxResponseTime": {
        "total": "12296",
        "ok": "12296",
        "ko": "9495"
    },
    "meanResponseTime": {
        "total": "6499",
        "ok": "6495",
        "ko": "6617"
    },
    "standardDeviation": {
        "total": "2385",
        "ok": "2350",
        "ko": "3251"
    },
    "percentiles1": {
        "total": "6732",
        "ok": "6729",
        "ko": "8467"
    },
    "percentiles2": {
        "total": "8323",
        "ok": "8321",
        "ko": "9294"
    },
    "percentiles3": {
        "total": "9964",
        "ok": "9991",
        "ko": "9455"
    },
    "percentiles4": {
        "total": "10964",
        "ok": "11047",
        "ko": "9487"
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
    "count": 144,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.785",
        "ok": "0.759",
        "ko": "0.026"
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
        "total": "75",
        "ok": "75",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2487",
        "ok": "2487",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10109",
        "ok": "10109",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7384",
        "ok": "7384",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1700",
        "ok": "1700",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7622",
        "ok": "7622",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8607",
        "ok": "8607",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9736",
        "ok": "9736",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10098",
        "ok": "10098",
        "ko": "-"
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
    "count": 75,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.393",
        "ok": "0.393",
        "ko": "-"
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
        "total": "75",
        "ok": "70",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "1093",
        "ok": "1093",
        "ko": "1106"
    },
    "maxResponseTime": {
        "total": "12296",
        "ok": "12296",
        "ko": "9495"
    },
    "meanResponseTime": {
        "total": "5614",
        "ok": "5543",
        "ko": "6617"
    },
    "standardDeviation": {
        "total": "2631",
        "ok": "2566",
        "ko": "3251"
    },
    "percentiles1": {
        "total": "5355",
        "ok": "5338",
        "ko": "8467"
    },
    "percentiles2": {
        "total": "7075",
        "ok": "6928",
        "ko": "9294"
    },
    "percentiles3": {
        "total": "10046",
        "ok": "10071",
        "ko": "9455"
    },
    "percentiles4": {
        "total": "11913",
        "ok": "11939",
        "ko": "9487"
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
    "count": 69,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.393",
        "ok": "0.366",
        "ko": "0.026"
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
