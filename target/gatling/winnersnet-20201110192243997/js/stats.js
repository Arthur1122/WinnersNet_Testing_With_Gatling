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
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6357",
        "ok": "6357",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3750",
        "ok": "3750",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3985",
        "ok": "3985",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5065",
        "ok": "5065",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5665",
        "ok": "5665",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6068",
        "ok": "6068",
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
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 149,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.119",
        "ok": "1.119",
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
        "total": "2291",
        "ok": "2291",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5778",
        "ok": "5778",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4492",
        "ok": "4492",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1038",
        "ok": "1038",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4778",
        "ok": "4778",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5278",
        "ok": "5278",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5676",
        "ok": "5676",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5762",
        "ok": "5762",
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
        "total": "0.56",
        "ok": "0.56",
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
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6357",
        "ok": "6357",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3008",
        "ok": "3008",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1391",
        "ok": "1391",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2621",
        "ok": "2621",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4060",
        "ok": "4060",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5475",
        "ok": "5475",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6296",
        "ok": "6296",
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
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.56",
        "ok": "0.56",
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
