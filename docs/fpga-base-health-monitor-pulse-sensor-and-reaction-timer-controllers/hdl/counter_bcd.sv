`timescale 1ns / 1ps
//-----------------------------------------------------------------------------
// Title         : counter_bcd - simple 4-bit BCD counter
//-----------------------------------------------------------------------------

module counter_bcd(
    input  logic clk, rst, enb,
    output logic [3:0] q,
    output logic carry
);
    assign carry = (q == 4'd9) && enb;

    always_ff @(posedge clk) begin
        if (rst || carry) q <= 4'd0;
        else if (enb)     q <= q + 4'd1;
    end
endmodule
