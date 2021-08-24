

function newForEach(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        callback(currentValue, i, array)
    }
}


function newFill(array, value, start = 0, end = array.length) {

    for (let i = start; i < end; i++) {
        array[i] = value
    }

    return array
}


function newMap(array, callback) {

    let mapReturn= []

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        mapReturn = [...mapReturn, callback(currentValue, i, array)]
    }

    return mapReturn
}


function newSome(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (callback(currentValue, i, array)) {
            return true
        }
    }

    return false
}


function newFind(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (callback(currentValue, i, array)) {
            return currentValue
        }
    }

    return undefined
}


function newFindIndex(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (callback(currentValue, i, array)) {
            return i
        }
    }

    return -1
}


function newEvery(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (!callback(currentValue, i, array)) {
            return false
        }
    }

    return true
}


function newFilter(array, callback) {

    let filterReturn = []
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (callback(currentValue, i, array)) {
            filterReturn = [...filterReturn, currentValue]
        }
    }

    return filterReturn
}



function newConcat(array, ...args) {

    let concatReturn = [...array]
    let arguments = [...args]
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            concatReturn = [...concatReturn, ...arguments[i]]
        } else {
            concatReturn = [...concatReturn, arguments[i]]
        }   
    }
    
    return concatReturn
}


function newIncludes(array, searchElement, fromIndex = 0) {

    if (fromIndex >= array.length) {
        return false
    }
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex
    }

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true
        }
    }
    return false
}


function newIndexOf(array, searchElement, fromIndex = 0) {

    if (fromIndex >= array.length) {
        return -1
    }
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex
    }

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i
        }
    }
    return -1
}


function newJoin(array, separator) {

    let joinReturn = ""
    if (array.length === 0) {
        return joinReturn
    }

    if (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] === undefined || array[i] === null || array[i] === []) {
                array[i] = ""
            }
            joinReturn = `${joinReturn}${array[i]}${separator}`
        }
    }
    joinReturn = `${joinReturn}${array[array.length - 1]}`
    return joinReturn
}


function newReduce(array, callback, initialValue = 0) {

    let reduceReturn = initialValue

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        reduceReturn = callback(reduceReturn, currentValue, i, array)
    }

    return reduceReturn
}


function newSlice(array, start = 0, end = array.length) {

    let sliceReturn = []
    if (start < 0) {
        start = array.length + start
    }
    if (end < 0) {
        end = array.length + end
    }

    for (let i = start; i < end; i++) {
        sliceReturn = [...sliceReturn, array[i]]
    }

    return sliceReturn
}


function newFlat(array, depth = 1) {

    let flatReturn = []
    let loopArray = [...array]

    for (let i = 0; i < depth; i++) {
        flatReturn = []

        for (let j = 0; j < loopArray.length; j++) {
            if (Array.isArray(loopArray[j])) {
                flatReturn = [...flatReturn, ...loopArray[j]]
            } else {
                flatReturn = [...flatReturn, loopArray[j]]
            }
        }

        loopArray = flatReturn
    }
    
    return flatReturn
}


function newFlatMap(array, callback) {

    let flatMapReturn = []
    let loopArray = []

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        loopArray = [...loopArray, callback(currentValue, i, array)]
    }

    let loopCount = loopArray.length

    for (let i = 0; i < loopCount; i++) {
        if (Array.isArray(loopArray[i])) {
            flatMapReturn = [...flatMapReturn, ...loopArray[i]]
        } else {
            flatMapReturn = [...flatMapReturn, loopArray[i]]
        }
    }
    
    return flatMapReturn
}


