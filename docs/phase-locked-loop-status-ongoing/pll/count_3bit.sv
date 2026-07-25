`timescale 1ns / 1ps

module count_3bit(
    input  logic clk, rst, en,
    output logic [2:0] q
);
    always_ff @(posedge clk) begin
        if (rst)      q <= 3'd0;
        else if (en)  q <= q + 3'd1;
        else          q <= 3'd0;
    end
endmodule
