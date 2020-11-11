var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1180",
        "ok": "1180",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4001",
        "ok": "4001",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2093",
        "ok": "2093",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1931",
        "ok": "1931",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2508",
        "ok": "2508",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3277",
        "ok": "3277",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3902",
        "ok": "3902",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.408",
        "ok": "0.408",
        "ko": "-"
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1180",
        "ok": "1180",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4001",
        "ok": "4001",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2298",
        "ok": "2298",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2292",
        "ok": "2292",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2655",
        "ok": "2655",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3760",
        "ok": "3760",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3953",
        "ok": "3953",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.204",
        "ok": "0.204",
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1252",
        "ok": "1252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2931",
        "ok": "2931",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1888",
        "ok": "1888",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1783",
        "ok": "1783",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2061",
        "ok": "2061",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2910",
        "ok": "2910",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2927",
        "ok": "2927",
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
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.204",
        "ok": "0.204",
        "ko": "-"
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
