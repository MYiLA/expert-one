"use strict";!function(){new Choices(".expert-one .filter__select--lang",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}}),new Choices(".expert-one .filter__select--country",{searchChoices:!1,shouldSort:!0,sorter:function(){return!0}});$(".expert-one .filter__open").on("click",(function(){$(".expert-one .filter__popup").addClass("active"),$(".expert-one").addClass("no-scroll")})),$(".expert-one .filter__close").on("click",(function(){$(".expert-one .filter__popup").removeClass("active"),$(".expert-one").removeClass("no-scroll")})),$(".expert-one .speaker__favourites").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).children(".speaker__favourites-text").text("В избранное"),$(this).children(".speaker__favourites-icon").css({"background-image":"url(./img/heart-gray.svg)"})):($(this).addClass("active"),$(this).children(".speaker__favourites-text").text("В избранном"),$(this).children(".speaker__favourites-icon").css({"background-image":"url(./img/heart-full.svg)"}))}))}();