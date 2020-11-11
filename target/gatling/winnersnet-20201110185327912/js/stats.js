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
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12733",
        "ok": "12733",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4824",
        "ok": "4824",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1984",
        "ok": "1984",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5256",
        "ok": "5256",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6411",
        "ok": "6411",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7258",
        "ok": "7258",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8253",
        "ok": "8253",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 147,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.351",
        "ok": "1.351",
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
        "total": "3514",
        "ok": "3514",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7567",
        "ok": "7567",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6060",
        "ok": "6060",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1007",
        "ok": "1007",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6279",
        "ok": "6279",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6701",
        "ok": "6701",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7297",
        "ok": "7297",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7526",
        "ok": "7526",
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
        "total": "0.676",
        "ok": "0.676",
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
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12733",
        "ok": "12733",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3588",
        "ok": "3588",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1950",
        "ok": "1950",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3235",
        "ok": "3235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4294",
        "ok": "4294",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7003",
        "ok": "7003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9906",
        "ok": "9906",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 72,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.676",
        "ok": "0.676",
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
