$(document).ready(function () {
    var blueColor = '#00a0db';
    var selectedColor="#02a3de";
    var grayColor = "#CCCCCC";


    function removeOldStyle() {
        $('symbol').children().each(function () {
            var sybmolChildren = $(this);
            if (sybmolChildren.children().length > 0) {
                sybmolChildren.children().each(function () {
                    var subChildren = $(this);
                    if (subChildren.attr('fill') == blueColor) {
                        if (subChildren.is('text') || subChildren.is('tspan')) {
                            subChildren.attr('fill', 'black')
                        }
                      else{
                          subChildren.attr('fill', grayColor)
                      }
                    }
                })
            }
            else {
                if (sybmolChildren.attr('fill') == blueColor) {
                    if (sybmolChildren.is('text') || sybmolChildren.is('tspan')) {
                        sybmolChildren.attr('fill', 'black')
                    }
                    else if (sybmolChildren.is('polygon')) {
                        if (sybmolChildren.attr('fill')== blueColor) {
                            sybmolChildren.attr('fill', grayColor)
                        }
                    }
                    else{
                        sybmolChildren.attr('fill', grayColor)
                    }
                   
                        
                   
                }
            }
        })
    }
    function applyNewStyles(elem) {
        var $this = elem;
        var id = $this.closest("svg").attr('id');
        if (id == "Selected_Items") return;
        var parentElement = document.getElementById(id);
        $(parentElement).children().each(function () {
            var $currentElement = $(this);
            if ($currentElement.children().length > 0) {
              
                $currentElement.children().each(function () {
                    $currentChildElement = $(this);
                    if ($currentChildElement.is('polyline')) {
                    }
                    else if ($currentChildElement.is('polygon')) {
                        if (($currentChildElement).attr('fill') == grayColor) {
                            $currentChildElement.attr('fill', blueColor)
                        }
                    }
                    else  {
                        // if (($currentChildElement).attr('fill') == grayColor) {
                            if($currentChildElement.attr('fill')!=selectedColor){
                                $currentChildElement.attr('fill', blueColor)
                            }
                            
                        // }
                    }
                });
            }
            else {
                $currentChildElement = $(this);
                if ($currentChildElement.is('polyline')) {
                }
                else if ($currentChildElement.is('polygon')) {
                    if (($currentChildElement).attr('fill') == grayColor) {
                        $currentChildElement.attr('fill', blueColor)
                    }
                }
                else  {
                    if($currentChildElement.attr('fill')!=selectedColor){
                        $currentChildElement.attr('fill', blueColor)
                    }
                }
            }
        });
    }
    function openRightSide(elem) {
       
        var $this = elem;
         var id = $this.closest("svg").attr('id');
        if (id == "Selected_Items") return;
        var parentElement = document.getElementById(id);
        var textVal =  $(parentElement).children('text').first().text();
        if (textVal == $('.panel-number').text(textVal)) return;
        if (textVal != '') {
            $('.right-side').show();
            $('.panel-number').text(textVal);
        }
    }
    function removeSelectedStyle() {
        $('symbol').children().each(function () {
            var sybmolChildren = $(this);
            if (sybmolChildren.children().length > 0) {
                sybmolChildren.children().each(function () {
                    var subChildren = $(this);
                    if (subChildren.attr('fill') == selectedColor) {
                        if (subChildren.is('text') || subChildren.is('tspan')) {
                            subChildren.attr('fill', 'black')
                        }
                      else{
                          subChildren.attr('fill', grayColor)
                      }
                    }
                })
            }
            else {
                if (sybmolChildren.attr('fill') == selectedColor) {
                    if (sybmolChildren.is('text') || sybmolChildren.is('tspan')) {
                        sybmolChildren.attr('fill', 'black')
                    }
                    else if (sybmolChildren.is('polygon')) {
                        if (sybmolChildren.attr('fill')== selectedColor) {
                            sybmolChildren.attr('fill', grayColor)
                        }
                    }
                    else{
                        sybmolChildren.attr('fill', grayColor)
                    }
                }
            }
        })
    }
    function applySelectedStyles(elem) {
        var $this = elem;
        var id = $this.closest("svg").attr('id');
        if (id == "Selected_Items") return;
        var parentElement = document.getElementById(id);
        $(parentElement).children().each(function () {
            var $currentElement = $(this);
            if ($currentElement.children().length > 0) {
                $currentElement.children().each(function () {
                    $currentChildElement = $(this);
                    if ($currentChildElement.is('polyline')) {
                    }
                    else if ($currentChildElement.is('polygon')) {
                        if (($currentChildElement).attr('fill') == blueColor) {
                            $currentChildElement.attr('fill', selectedColor)
                        }
                    }
                    else {
                        $currentChildElement.attr('fill', selectedColor)
                    }
                });
            }
            else {
                $currentChildElement = $(this);
                if ($currentChildElement.is('polyline')) {
                }
                else if ($currentChildElement.is('polygon')) {
                    if (($currentChildElement).attr('fill') == blueColor) {
                        $currentChildElement.attr('fill', selectedColor)
                    }
                }
                else {
                    $currentChildElement.attr('fill', selectedColor)
                }
            }
        });
    }
    $("path, text, g, polygon").mouseenter(function (e) {
        var $this = $(e.target);
        removeOldStyle($this);
        applyNewStyles($this);
        // polygonStyles($this);
    }).mouseleave(function (e) {
        // var $this=$(this);
        // applyNewStyles($this);
    });
    $("path, text, g, polygon").mousedown(function (e) {
        var $this = $(e.target);
        removeSelectedStyle();
        applySelectedStyles($this);
        openRightSide($this);
    });
});