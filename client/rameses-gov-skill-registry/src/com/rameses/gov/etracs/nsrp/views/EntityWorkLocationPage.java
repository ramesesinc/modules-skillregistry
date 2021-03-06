/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rameses.gov.etracs.nsrp.views;

import com.rameses.rcp.ui.annotations.Template;
import com.rameses.seti2.views.CrudFormPage;

/**
 *
 * @author Rameses
 */
@Template(CrudFormPage.class)
public class EntityWorkLocationPage extends javax.swing.JPanel {

    /**
     * Creates new form EntityEducationPage
     */
    public EntityWorkLocationPage() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        xFormPanel1 = new com.rameses.rcp.control.XFormPanel();
        xCheckBox1 = new com.rameses.rcp.control.XCheckBox();
        xComboBox1 = new com.rameses.rcp.control.XComboBox();

        xFormPanel1.setCaptionWidth(100);

        xCheckBox1.setCaption("Local");
        xCheckBox1.setName("entity.local"); // NOI18N
        xFormPanel1.add(xCheckBox1);

        xComboBox1.setCaption("Work Location");
        xComboBox1.setDynamic(true);
        xComboBox1.setExpression("#{item.name}");
        xComboBox1.setItemKey("name");
        xComboBox1.setItems("locations");
        xComboBox1.setName("entity.location"); // NOI18N
        xComboBox1.setPreferredSize(new java.awt.Dimension(0, 20));
        xComboBox1.setRequired(true);
        xFormPanel1.add(xComboBox1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(xFormPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, 435, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(xFormPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 97, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(41, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private com.rameses.rcp.control.XCheckBox xCheckBox1;
    private com.rameses.rcp.control.XComboBox xComboBox1;
    private com.rameses.rcp.control.XFormPanel xFormPanel1;
    // End of variables declaration//GEN-END:variables
}
