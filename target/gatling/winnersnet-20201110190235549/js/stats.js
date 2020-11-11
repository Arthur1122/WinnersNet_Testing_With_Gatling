var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "159",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "893",
        "ok": "893",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "9963",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "5642",
        "ok": "5300",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "4875",
        "ok": "2284",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5415",
        "ok": "5409",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "7144",
        "ok": "7102",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "8796",
        "ok": "8754",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "9857",
        "ok": "9752",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 154,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.039",
        "ok": "1.032",
        "ko": "0.006"
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
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9783",
        "ok": "9783",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6023",
        "ok": "6023",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1897",
        "ok": "1897",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5800",
        "ok": "5800",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7529",
        "ok": "7529",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8842",
        "ok": "8842",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9740",
        "ok": "9740",
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
    "count": 80,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.519",
        "ok": "0.519",
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
        "total": "80",
        "ok": "79",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "893",
        "ok": "893",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "9963",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "5262",
        "ok": "4569",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "6607",
        "ok": "2407",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4565",
        "ok": "4523",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "6490",
        "ok": "6425",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "8262",
        "ok": "8227",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "20471",
        "ok": "9303",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.519",
        "ok": "0.513",
        "ko": "0.006"
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
