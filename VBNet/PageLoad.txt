<%@ Page Language="vb" EnableViewState="false" runat="server" %>

<script runat="server">
    'auto executed page event
    Sub Page_Load(ByVal Sender As Object, ByVal e As EventArgs) Handles Me.Load
        OurLabel.Text = "<b>Page_Load</b> event"
    End Sub

    Sub CountDown(sender As Object, e As System.EventArgs)
        Dim i As Integer
        For i = CDbl(Text1.Text) To 1 Step -1
            OurLabel.Text += "Countdown: " + i.ToString() + "<br>"
        Next
    End Sub

    Sub StringLength(sender As Object, e As System.EventArgs)
        OurLabel.Text = "The length of this string is: " + Text1.Text.Length.ToString
    End Sub

</script>

<html>
<head>
    <title>What do you want?</title>
</head>
<body>
    <form runat="server">
        Either enter a word to find its length or a number to count down from<br>
        <asp:TextBox ID="Text1" runat="server" />
        <asp:Button ID="btnCountDown" Text="Count Down" OnClick="CountDown"
            runat="server" />
        <asp:Button ID="btnLength" Text="Get Length" OnClick="StringLength"
            runat="server" />
        <br>
        <br>
        <asp:Label ID="OurLabel" runat="server" /><br>
    </form>
</body>
</html>
