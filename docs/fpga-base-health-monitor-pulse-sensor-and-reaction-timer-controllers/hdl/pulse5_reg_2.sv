`timescale 1ns / 1ps

module pulse5_reg_2(
    input  logic clk, lden, rst,
    input  logic [4:0] q1,
    output logic [4:0] q2
);
    always_ff @(posedge clk) begin
        if (rst)       q2 <= '0;
        else if (lden) q2 <= q1;
    end
endmodule
