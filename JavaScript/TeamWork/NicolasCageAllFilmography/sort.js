function sortByUnit1(){
    Caged.sort(function(a, b){
         if (a.unit < b.unit){
             return -1;
         }
         if (a.unit > b.unit){
             return 1;
         }
         return 0;
     });
     print(Caged);
}

function sortByUnit2() {
    Caged.sort(function(a, b){
         if (b.unit < a.unit){
             return -1;
        }
        if (b.unit > a.unit){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByID1(){
    Caged.sort(function(a, b){
        if(a.show_id < b.show_id){
            return -1;
        }
        if (a.show_id > b.show_id){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByID2(){
    Caged.sort(function(a, b){
        if(b.show_id < a.show_id){
            return -1;
        }
        if (b.show_id > a.show_id){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByShow_title1(){
    Caged.sort(function(a, b){
        if(a.show_title < b.show_title){
            return -1;
        }
        if (a.show_title > b.show_title){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByShow_title2(){
    Caged.sort(function(a, b){
        if(b.show_title < a.show_title){
            return -1;
        }
        if (b.show_title > a.show_title){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByReleaseYear1(){
    Caged.sort(function(a, b){
        if(a.release_year < b.release_year){
            return -1;
        }
        if (a.release_year > b.release_year){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByReleaseYear2(){
    Caged.sort(function(a, b){
        if(b.release_year < a.release_year){
            return -1;
        }
        if (b.release_year > a.release_year){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByRating1(){
    Caged.sort(function(a, b){
        if(a.rating < b.rating){
            return -1;
        }
        if (a.rating > b.rating){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByRating2(){
    Caged.sort(function(a, b){
        if(b.rating < a.rating){
            return -1;
        }
        if (b.rating > a.rating){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByCategory1(){
    Caged.sort(function(a, b){
        if(a.category < b.category){
            return -1;
        }
        if (a.category > b.category){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByCategory2(){
    Caged.sort(function(a, b){
        if(b.category < a.category){
            return -1;
        }
        if (b.category > a.category){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByDirector1(){
    Caged.sort(function(a, b){
        if(a.director < b.director){
            return -1;
        }
        if (a.director > b.director){
            return 1;
        }
        return 0;
    });
    print(Caged);
}

function sortByDirector2(){
    Caged.sort(function(a, b){
        if(b.director < a.director){
            return -1;
        }
        if (b.director > a.director){
            return 1;
        }
        return 0;
    });
    print(Caged);
}



function sortByRuntime1(){
    Caged.sort(function(a, b){
        var stringRuntimeA = a.runtime;
        var patt1 = /\d+/g;
        var result = stringRuntimeA.match(patt1);
        var runtimeA = parseInt(stringRuntimeA);
        var stringRuntimeB = b.runtime;
        var patt2 = /\d+/g;
        var result = stringRuntimeB.match(patt2);
        var runtimeB = parseInt(stringRuntimeB);
            if(runtimeA < runtimeB){
                return -1;
            }
            if (runtimeA > runtimeB){
                return 1;
            }
            return 0;
    });
    print(Caged);
}

function sortByRuntime2(){
    Caged.sort(function(a, b){
        var stringRuntimeA = a.runtime;
        var patt1 = /\d+/g;
        var result = stringRuntimeA.match(patt1);
        var runtimeA = parseInt(stringRuntimeA);
        var stringRuntimeB = b.runtime;
        var patt2 = /\d+/g;
        var result = stringRuntimeB.match(patt2);
        var runtimeB = parseInt(stringRuntimeB);
            if(runtimeB < runtimeA){
                return -1;
            }
            if (runtimeB > runtimeA){
                return 1;
            }
            return 0;
    });
    print(Caged);
}