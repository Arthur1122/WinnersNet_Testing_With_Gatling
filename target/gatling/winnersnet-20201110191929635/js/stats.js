var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1324",
        "ok": "1324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "18772",
        "ok": "18772",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5921",
        "ok": "5921",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2776",
        "ok": "2776",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5675",
        "ok": "5675",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6534",
        "ok": "6534",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11624",
        "ok": "11624",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13215",
        "ok": "13215",
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
    "count": 150,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.027",
        "ok": "1.027",
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
        "total": "75",
        "ok": "75",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1425",
        "ok": "1425",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6821",
        "ok": "6821",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5421",
        "ok": "5421",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1038",
        "ok": "1038",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5601",
        "ok": "5601",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6127",
        "ok": "6127",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6540",
        "ok": "6540",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6700",
        "ok": "6700",
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
        "total": "0.514",
        "ok": "0.514",
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
        "ok": "75",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1324",
        "ok": "1324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "18772",
        "ok": "18772",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6421",
        "ok": "6421",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3720",
        "ok": "3720",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5844",
        "ok": "5844",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8851",
        "ok": "8851",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12579",
        "ok": "12579",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14829",
        "ok": "14829",
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
        "total": "0.514",
        "ok": "0.514",
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
