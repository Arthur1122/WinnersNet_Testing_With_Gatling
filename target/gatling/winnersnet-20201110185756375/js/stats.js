var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "170",
        "ok": "150",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "1066",
        "ok": "1066",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59610",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "15681",
        "ok": "9772",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "20187",
        "ok": "12847",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6472",
        "ok": "5403",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "12064",
        "ok": "9472",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "38681",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57354",
        "ko": "60001"
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
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 20,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.971",
        "ok": "0.857",
        "ko": "0.114"
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
        "total": "85",
        "ok": "66",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "1141",
        "ok": "1141",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59610",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "25119",
        "ok": "15077",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "24307",
        "ok": "17601",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10727",
        "ok": "6039",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "57312",
        "ok": "23279",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "54561",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "58170",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 64,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 19,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.486",
        "ok": "0.377",
        "ko": "0.109"
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
        "total": "85",
        "ok": "84",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1066",
        "ok": "1066",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60000",
        "ok": "18972",
        "ko": "60000"
    },
    "meanResponseTime": {
        "total": "6244",
        "ok": "5604",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "6789",
        "ok": "3439",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4954",
        "ok": "4783",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "8324",
        "ok": "8131",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "10667",
        "ok": "10537",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "25536",
        "ok": "15513",
        "ko": "60000"
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
    "count": 83,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.486",
        "ok": "0.48",
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
