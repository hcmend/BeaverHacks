#include <iostream>

bool check_if_rectangular(string expression) {
    for (int i = 0; i < expression.length(); ++) {
        if (expression[i] == 'i'){
            return true;
        }
    }
    return false;
}

bool check_if_polar(string expression) {
    for (int i = 0; i < expression.length(); ++) {
        if (expression[i] == '<'){
            return true;
        }
    }
    return false;
}

bool check_if_real(string expression) {
    for (int i = 0; i < expression.length(); ++) {
        if (!isdigit(expression[i]) && expression[i] != '.' && expression[i] != '/') {
            return false;
        }
    }
    return true;
}

string determine_format(string expression) {
    if (check_if_real(expression)) {
        return "real";
    } else if (check_if_polar(expression)) {
        return "polar";
    } else if (check_if_rectangular(expression)) {
        return "rectangular";
    } else {
        return "unknown";
    }
}

