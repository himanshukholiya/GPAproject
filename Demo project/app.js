var app = angular.module('studentApp', []);
app.controller('GPActrl', function ($scope) {

    $scope.gradedata=
    [
        '1', '2'
    ];
    $scope.data =
    [
        { 'g': '1','name': 'Rohit', 'GPA': 8.1 },
        { 'g': '2','name': 'Suresh', 'GPA': 5.4 },
        { 'g': '3','name': 'Raj', 'GPA': 8 },
        { 'g': '6','name': 'Rahul', 'GPA': 7 },
    ];


    $scope.addGrade = function(){
          if($scope.grade != undefined){
            $scope.gradedata.push($scope.grade);
            $scope.grade = null;
        }
    }


    $scope.deleteItem = function(index, content){
        $scope.gradedata.splice(index, 1);
    }
    $scope.deleteItem2 = function(index, content){
        $scope.data.splice(index, 1);
    }

    $scope.addRow = function () {
        if ($scope.name != undefined && $scope.GPA != undefined && $scope.GPA > 0 &&  $scope.GPA <= 10 ) {
            var newdata = [];
            newdata.g = $scope.Grade
            newdata.name = $scope.name;
            newdata.GPA = $scope.GPA;
            
            var res = $scope.gradedata.indexOf(newdata.g) == -1;
            if(res == true){
             $scope.gradedata.push($scope.Grade);}

            $scope.data.push(newdata);

            // CLEAR TEXTBOX.
            $scope.Grade= null;
            $scope.name = null;
            $scope.GPA = null;
            res = null;
        }
    }

    // $scope.sortItem =function(index){
    //     var actualgrade =index+1;// g=2  134
    //     for(var u=0; u<$scope.data.length;u++){
    //         if($scope.data[u].g != actualgrade){
    //             let index = $scope.data.findIndex( r => r.g === $scope.data[u].g );
    //             console.log(index);
    //             $scope.data.splice(index, 3);
                
    //         }
           
    //     }
    // }


    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.data.length; i++){
            var p = $scope.data[i].GPA;
            total += p;
        }
        return total/2;
    }
    



});