`timescale 1ns / 1ps

module pulse5_reg_1(
    input  logic clk, lden, rst,
    input  logic [4:0] q0,
    output logic [4:0] q1
);
    always_ff @(posedge clk) begin
        if (rst)       q1 <= '0;
        else if (lden) q1 <= q0;
    end
endmodule
