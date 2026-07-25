`timescale 1ns / 1ps

module incrementor(
    input  logic [2:0] q,
    output logic [2:0] qinc
);
    assign qinc = q + 3'd1;
endmodule
