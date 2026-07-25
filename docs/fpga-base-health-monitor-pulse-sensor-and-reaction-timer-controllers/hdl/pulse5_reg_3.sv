`timescale 1ns / 1ps

module pulse5_reg_3(
    input  logic clk, lden, rst,
    input  logic [4:0] q2,
    output logic [4:0] q3
);
    always_ff @(posedge clk) begin
        if (rst)       q3 <= '0;
        else if (lden) q3 <= q2;
    end
endmodule
