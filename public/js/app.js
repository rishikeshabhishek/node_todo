$(document).ready(function() {
    $(".taskcheck").on("change", function(e) {
        console.log($(this).val());
        $.ajax({
            url: "updatestatus",
            type: "POST",
            data: {
                taskId: $(this).val()
            },
            success: function(result) {
                console.log(result);
                window.location.reload();
            },
            error: function(error) {
                console.log(error);
            }
        })
    })


    $(".delete").on("click", function(e) {
        e.preventDefault();
        // alert("hi")
        $.ajax({
            url: "deletetask",
            type: "POST",
            data: {
                taskId: $(this).val()
            },
            success: function(result) {
                console.log(result);
                window.location.reload();
            },
            error: function(error) {
                console.log(error);
            }
        })
    })

    $(".edit").on("click", function(e) {
        e.preventDefault();
        // alert("hey...")
        console.log($(this).val());
        $.ajax({
            url: "fetchtask",
            type: "POST",
            data: {
                taskId: $(this).val(),
                task: $("#task").val()
            },
            success: function(result) {
                console.log(result);
                console.log("All is well");
                $("#taskid").val(result._id);
                $("#task").val(result.task);
            },
            error: function(err) {
                console.log("All is not well");
            }
        })
    })
})