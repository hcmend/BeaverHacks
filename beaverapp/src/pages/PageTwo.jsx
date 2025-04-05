import React from "react";

function checkIfRectangular(expression) {
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === 'i') {
            return true;
        }
    }
    return false;
}

function checkIfPolar(expression) {
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '<') {
            return true;
        }
    }
    return false;
}

function checkIfReal(expression) {
    for (let i = 0; i < expression.length; i++) {
        if (!/[\d.\/]/.test(expression[i])) {
            return false;
        }
    }
    return true;
}

function determineFormat(expression) {
    if (checkIfReal(expression)) {
        return "real";
    } else if (checkIfPolar(expression)) {
        return "polar";
    } else if (checkIfRectangular(expression)) {
        return "rectangular";
    } else {
        return "unknown";
    }
}

export default function PageTwo() {
    const testExpression = "3+4i"; // Example input
    const format = determineFormat(testExpression);

    return (
        <div>
            <h1 className="text-2xl font-bold">Page Two</h1>
            <p>Welcome to the second page.</p>
            <h2>Expression Format Checker</h2>
            <p>Expression: {testExpression}</p>
            <p>Format: {format}</p>
        </div>
    );
}


