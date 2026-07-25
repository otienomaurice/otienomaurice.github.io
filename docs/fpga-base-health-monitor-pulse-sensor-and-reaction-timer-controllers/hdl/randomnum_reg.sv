`timescale 1ns / 1ps

module randomnum_reg(
    input  logic rst, clk,
    input  logic [2:0] d,
    output logic [2:0] q,
    input  logic en
);
    always_ff @(posedge clk) begin
        if (rst)      q <= '0;
        else if (en)  q <= d;
        else          q <= '0;
    end
endmodule
