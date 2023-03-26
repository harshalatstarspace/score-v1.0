let homeScore = 0
let guestScore = 0
let homeScoreHtmlElement = document.getElementById("homeScoreNumHTMl")
let guestScoreHtmlElement = document.getElementById("guestScoreNumHTMl")
let homeFouls = 0
let guestFouls = 0
let homeFoulsHtmlElement = document.getElementById("homeFoulNumHTMl")
let guestFoulsHtmlElement = document.getElementById("guestFoulNumHTMl")
let homeFoulPlayerNumInputHTML = document.getElementById("hFoulPlayerInputHTML")
let guestFoulPlayerNumInputHTML = document.getElementById("gFoulPlayerInputHTML")
let homeFoulPlayerNumElementHTMl = document.getElementById("homeFoulPlayerNumHTMl")
let guestFoulPlayerNumElementHTMl = document.getElementById("guestFoulPlayerNumHTMl")

// home score functions

function hScoreModPlus1Func() {
    homeScore += 1
    homeScoreHtmlElement.textContent = homeScore
}

function hScoreModPlus2Func() {
    homeScore += 2
    homeScoreHtmlElement.textContent = homeScore
}

function hScoreModPlus3Func() {
    homeScore += 3
    homeScoreHtmlElement.textContent = homeScore
}

function hScoreModMinus1Func() {
    homeScore -= 1
    homeScoreHtmlElement.textContent = homeScore
}

// guest score functions

function gScoreModPlus1Func() {
    guestScore += 1
    guestScoreHtmlElement.textContent = guestScore
}

function gScoreModPlus2Func() {
    guestScore += 2
    guestScoreHtmlElement.textContent = guestScore
}

function gScoreModPlus3Func() {
    guestScore += 3
    guestScoreHtmlElement.textContent = guestScore
}

function gScoreModMinus1Func() {
    guestScore -= 1
    guestScoreHtmlElement.textContent = guestScore
}

// home fouls functions

function hFoulModPlus1Func() {
    homeFouls += 1
    homeFoulsHtmlElement.textContent = homeFouls
}

function hFoulModMinus1Func() {
    homeFouls -= 1
    homeFoulsHtmlElement.textContent = homeFouls
}

function hFoulPlayerEnterBtnFunc() {
    homeFoulPlayerNumElementHTMl.textContent = "# " + homeFoulPlayerNumInputHTML.value
    homeFoulPlayerNumInputHTML.value = " "
}

// guest fouls functions

function gFoulModPlus1Func() {
    guestFouls += 1
    guestFoulsHtmlElement.textContent = guestFouls
}

function gFoulModMinus1Func() {
    guestFouls -= 1
    guestFoulsHtmlElement.textContent = guestFouls
}

function gFoulPlayerEnterBtnFunc() {
    guestFoulPlayerNumElementHTMl.textContent = "# " + guestFoulPlayerNumInputHTML.value
    guestFoulPlayerNumInputHTML.value = " "
}

// This is the reset ALL Function

function resetALLFunc() {
    homeScore = 0 
    guestScore = 0
    homeFouls = 0 
    guestFouls = 0
    homeFoulPlayerNumElementHTMl.textContent = "#"
    guestFoulPlayerNumElementHTMl.textContent = "#"
    homeScoreHtmlElement.textContent = homeScore
    homeFoulsHtmlElement.textContent = homeFouls
    guestScoreHtmlElement.textContent = guestScore
    guestFoulsHtmlElement.textContent = guestFouls
    console.log(homeScore)
    console.log(guestScore)
    console.log(homeFouls)
    console.log(guestFouls)
}
