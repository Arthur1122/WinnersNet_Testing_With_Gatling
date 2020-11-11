var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1550",
        "ok": "1699",
        "ko": "1550"
    },
    "maxResponseTime": {
        "total": "1699",
        "ok": "1699",
        "ko": "1550"
    },
    "meanResponseTime": {
        "total": "1625",
        "ok": "1699",
        "ko": "1550"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1625",
        "ok": "1699",
        "ko": "1550"
    },
    "percentiles2": {
        "total": "1662",
        "ok": "1699",
        "ko": "1550"
    },
    "percentiles3": {
        "total": "1692",
        "ok": "1699",
        "ko": "1550"
    },
    "percentiles4": {
        "total": "1698",
        "ok": "1699",
        "ko": "1550"
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
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.049",
        "ok": "0.024",
        "ko": "0.024"
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1699",
        "ok": "1699",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1699",
        "ok": "1699",
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.024",
        "ok": "0.024",
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
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "maxResponseTime": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "meanResponseTime": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "percentiles2": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "percentiles3": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
    },
    "percentiles4": {
        "total": "1550",
        "ok": "-",
        "ko": "1550"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.024",
        "ok": "-",
        "ko": "0.024"
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
