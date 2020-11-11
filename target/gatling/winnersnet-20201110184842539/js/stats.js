var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20197",
        "ok": "20197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4111",
        "ok": "4111",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2290",
        "ok": "2290",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4208",
        "ok": "4208",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4982",
        "ok": "4982",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6875",
        "ok": "6875",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9058",
        "ok": "9058",
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
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.813",
        "ok": "0.813",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1552",
        "ok": "1552",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5532",
        "ok": "5532",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4283",
        "ok": "4283",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4405",
        "ok": "4405",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4861",
        "ok": "4861",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5357",
        "ok": "5357",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5464",
        "ok": "5464",
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
    "count": 50,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.407",
        "ok": "0.407",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20197",
        "ok": "20197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3938",
        "ok": "3938",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3119",
        "ok": "3119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2976",
        "ok": "2976",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5367",
        "ok": "5367",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7824",
        "ok": "7824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14684",
        "ok": "14684",
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
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.407",
        "ok": "0.407",
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
