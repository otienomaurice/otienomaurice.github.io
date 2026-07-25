`timescale 1ns / 1ps

module delay_counter(
    input  logic rst, clk,
    output logic [12:0] W
);
    always_ff @(posedge clk) begin
        if (rst) W <= '0;
        else     W <= W + 13'd1;
    end
endmodule
