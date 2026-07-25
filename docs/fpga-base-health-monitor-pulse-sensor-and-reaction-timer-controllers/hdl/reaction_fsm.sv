`timescale 1ns / 1ps

module reaction_FSM(
    input  logic start, enter, rwait_done, wait5_done, time_late, rst, clk,
    output logic [2:0] color_r, color_g, color_b,
    output logic time_clr, time_en, start_wait5, start_rwait, rs_en
);
    typedef enum logic [2:0] {
        IDLE    = 3'b000,
        RWAIT   = 3'b001,
        WHITE   = 3'b010,
        RED     = 3'b011,
        YELLOW  = 3'b100,
        GREEN   = 3'b101,
        DISPLAY = 3'b110
    } states_t;

    states_t state, next;

    always_ff @(posedge clk) begin
        if (rst) state <= GREEN;
        else     state <= next;
    end

    always_comb begin
        next = GREEN;
        unique case (state)
            IDLE: begin
                color_r = 3'd0; color_g = 3'd2; color_b = 3'd0;
                time_clr = 1'b1; start_rwait = 1'b0; start_wait5 = 1'b0; rs_en = 1'b0; time_en = 1'b0;
                if (start) next = RWAIT;
                else       next = IDLE;
            end

            GREEN: begin
                color_r = 3'd0; color_g = 3'd2; color_b = 3'd0;
                time_clr = 1'b1; start_rwait = 1'b0; time_en = 1'b0; start_wait5 = 1'b0; rs_en = 1'b0;
                if (start) next = RWAIT;
                else       next = GREEN;
            end

            RWAIT: begin
                color_r = 3'd0; color_g = 3'd0; color_b = 3'd0;
                time_clr = 1'b1; start_rwait = 1'b1; time_en = 1'b0; start_wait5 = 1'b0; rs_en = 1'b0;
                if (rwait_done)              next = WHITE;
                else if (enter & ~rwait_done) next = RED;
                else                         next = RWAIT;
            end

            RED: begin
                color_r = 3'd7; color_g = 3'd0; color_b = 3'd0;
                start_wait5 = 1'b1; time_clr = 1'b1; start_rwait = 1'b0; time_en = 1'b0; rs_en = 1'b0;
                if (wait5_done) next = IDLE;
                else            next = RED;
            end

            WHITE: begin
                color_r = 3'd4; color_g = 3'd2; color_b = 3'd3;
                start_rwait = 1'b0; rs_en = 1'b0; time_en = 1'b1; start_wait5 = 1'b0; time_clr = 1'b0;
                if (time_late)               next = YELLOW;
                else if (enter & ~time_late) next = DISPLAY;
                else                         next = WHITE;
            end

            DISPLAY: begin
                color_r = 3'd0; color_g = 3'd2; color_b = 3'd0;
                start_rwait = 1'b0; rs_en = 1'b1; time_clr = 1'b0; time_en = 1'b0; start_wait5 = 1'b0;
                if (start) next = IDLE;
                else       next = DISPLAY;
            end

            YELLOW: begin
                color_r = 3'd7; color_g = 3'd2; color_b = 3'd0;
                time_clr = 1'b1; start_rwait = 1'b0; time_en = 1'b0; start_wait5 = 1'b1; rs_en = 1'b0;
                if (wait5_done) next = IDLE;
                else            next = YELLOW;
            end

            default: begin
                color_r = 3'd0; color_g = 3'd0; color_b = 3'd0;
                time_clr = 1'b1; start_rwait = 1'b0; start_wait5 = 1'b0; rs_en = 1'b0; time_en = 1'b0;
                next = GREEN;
            end
        endcase
    end
endmodule
